// import { ActiveRoute } from '../core/active-route.service';
// import { AuthService } from '../services/auth.service';
// import { NewsService } from '../services/news.service';


// export class NewsComponent {
//     constructor() {
//         this._activeRoute = new ActiveRoute();
//         this._authService = new AuthService();
//         this._newsService = new NewsService();

//         this._authNewsId = this._authService.newsId;
//         this._activeNewsId = this._activeRoute.parseRequestURL().id;
//         this._news;
//     }

//     async beforeRender() {
//         this._news = await this._newsService.getNews(this._authNewsId);
//         console.log(this._news);
//     }

//     render() {
//         return `
//         <!-- Component styles -->
//         <style>
//             ${this._style()}
//         </style>
//         <!-- Component html -->
//         <div class="news-cover-container"
//             style="background: url(${this._news.cover}) no-repeat center / cover;"
//         >
//         </div>
//         <div class="news-avatar-container d-flex justify-content-center">
//             <div class="news-avatar">
//                 <img src="${this._news.avatar}">
//             </div>
//         </div>
//     `;
//     }

//     _style() {
//         return `
//             img {
//                 max-width: 100%;
//                 min-height: 140px;
//             }
//             .news-cover-container {
//                 height: 400px;
//                 width: 100%;
//             }
//             .news-avatar-container {
//                 transform: translateY(-50%);
//             }
//             .news-avatar {
//                 width: 138px;
//                 height: 138px;
//                 border-radius: 50%;
//                 overflow: hidden;
//             }
//         `;
//     }

//     afterRender() {

//     }
// }