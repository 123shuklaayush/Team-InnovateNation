from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher


class ActionGreet(Action):
    def name(self) -> Text:
        return "action_initial_options_in"

    def run(
        self,
        dispatcher: CollectingDispatcher,
        tracker: Tracker,
        domain: Dict[Text, Any],
    ) -> List[Dict[Text, Any]]:
        buttons = [
            {
                "title": "ओपनआर्म्स के बारे में",
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is_in/About"}',
            },
            {
                "title": "बॉट का उपयोग",
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is_in/use_of_bot"}',
            },
            {
                "title": "हमारे वर्चुअल एजेंट से बात करें",
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is_in/About_Articles"}',
            },
            {
                "title": "ग्राहक सेवा",
                "payload": '/trigger_response_selector{"retrieval_intent":"what_is_in/Customer Care"}',
            },
        ]

        dispatcher.utter_message(
            text="ओपनआर्म्स में आपका स्वागत है! 😄 कृपया विकल्प चुनें:", buttons=buttons
        )

        return []
