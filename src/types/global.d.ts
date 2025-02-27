import ca from "#/messages/ca.json";

type Messages = typeof ca;

declare global {
  type IntlMessages = Messages;
}
