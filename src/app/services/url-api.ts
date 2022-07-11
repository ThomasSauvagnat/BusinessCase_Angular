export class UrlApi {
  // C'est ici que l'on change notre URL
  static rawUrl: string = 'http://127.0.0.1:8000/api'
  static loginCheck: string = UrlApi.rawUrl + '/login_check'
  static commandRecurrence: string = UrlApi.rawUrl + '/commands/get_commands_recurrence'

  static keyTokenJWT: string = 'tokenJWT';
}
