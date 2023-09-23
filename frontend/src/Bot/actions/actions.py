# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions

from typing import Any, Dict, List, Text
from rasa_sdk.events import ActionExecuted
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import UserUtteranceReverted, ConversationPaused

# Customization of "action_default_ask_affimraiton that is used by the action_two_stage_fallback loop.
# This customization will make BOT to ask User to clarify their intention by providing suggesitons


class ActionDefaultAskAffirmation(Action):
    def name(self):
        return "action_default_ask_affirmation"

    async def run(self, dispatcher, tracker, domain):
        # select the top three intents from the tracker
        # ignore the first one -- nlu fallback
        predicted_intents = tracker.latest_message["intent_ranking"][1:4]
        print('predicted_intents are----->', predicted_intents)
        # A prompt asking the user to select an option
        message = "Sorry! What do you want to do?"
        # a mapping between intents and user friendly wordings
        intent_mappings = {
            "what_is": "What is Law Guide?",
            "Agent": "Use of Bot?",
            "Help": "Customer Care",
        }
        # show the top three intents as buttons to the user
        buttons = [
            {
                "title": intent_mappings['what_is'],
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is/About"}'
            },
            {
                "title": intent_mappings['Agent'],
                "payload":'/trigger_response_selector{"retrieval_intent":"what_is/use_of_bot"}'
            },
            {
                "title": intent_mappings['Help'],
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is/About_Articles"}'
            }
        ]
        # add a "none of these button", if the user doesn't
        # agree when any suggestion
        buttons.append({
            "title": "None of These",
            "payload": "/out_of_scope"})

        dispatcher.utter_message(text=message, buttons=buttons)
        return []

# Ultimate / Final fall back action as part Two Stage Fall back feature of RASA


class ActionDefaultFallback(Action):
    def name(self) -> Text:
        return "action_default_fallback"

    async def run(self, dispatcher, tracker, domain):

        # tell the user they are being passed to a customer service agent
        message = "I am sorry, I can't help you. "
        intent_mappings = {
            "Agent": "AGENT"
        }
        buttons = [ {
                "title": intent_mappings['Agent'],
                "payload": "https://www.google.com"
            }
        ]
        dispatcher.utter_message(text=message, buttons=buttons)

        return []
