export interface NotificationMessage {
  title: string;
  body: string;
}

export interface NotificationService {
  notifyWebsiteTeam(message: NotificationMessage): Promise<void>;
  notifySalesTeam(message: NotificationMessage): Promise<void>;
}
