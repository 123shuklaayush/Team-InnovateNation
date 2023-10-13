from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionGreet(Action):
    def name(self) -> Text:
        return "action_initial_options"

    async def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[Dict[Text, Any]]:
        buttons = [
            {
                "title": "About OpenArms",
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is/About"}',
            },
            {
                "title": "Use of Bot",
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is/use_of_bot"}',
            },
            {
                "title": "Talk to our Virtual Agent",
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is/About_Articles"}',
            },
            {
                "title": "Customer Care",
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is/Customer Care"}',
            },
        ]

        dispatcher.utter_message(
            text="Welcome to OpenArms! 😄 Select the option:", buttons=buttons
        )
