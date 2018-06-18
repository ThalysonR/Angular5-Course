export class LoggingService {
  logStatusChange(status: string) {
    console.log('A sever status changes, new status: ' + status);
  }
}
