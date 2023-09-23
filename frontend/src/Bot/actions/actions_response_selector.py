from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet
from rasa_sdk.executor import CollectingDispatcher


class ActionResponseSelector(Action):

    def name(self) -> Text:
        return "action_trigger_response_selector"

    def run(self,
            dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        retrieval_intent = tracker.get_slot("retrieval_intent")
        # if retrieval_intent:
        dispatcher.utter_message(template=f"utter_{retrieval_intent}")

        return [SlotSet("retrieval_intent", None)]
