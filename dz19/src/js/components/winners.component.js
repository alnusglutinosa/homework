    import { WinnersService } from '../services/winners.service';

    
    /** Class representing the winners component. */
    export class WinnersComponent {
        /**
         * Create winners component.
         * @param {Number} partWinners - part of the winners.
         * @param {Number} limitWinners - limit of the winners.
         */
        constructor(partWinners = 1, limitWinners = 5) {
            this._winnersService = new WinnersService();
            this._winners;
            this._partWinners = partWinners;
            this._limitWinners = limitWinners;
        }
    
        /**
         * Get the winners before the render.
         */
        async beforeRender() {
            this._winners = await this._winnersService.getWinners(this._partWinners, this._limitWinners);
        }
    
        /**
         * Get a winners template.
         * @return {string} winners template.
         */
        render() {
            if (!this._winners.winners) {
                return '';
            }

            let result = this._winners.winners.reduce((template, current) => {
               return template + this._getTemplateCard(current.member_id.images[0].image_basic.url, current.member_id.user_id.full_name);
            }, '');

            let buttonMore = (this._winners.winners.length === this._limitWinners) 
                            ? '<button type="button" class="btn btn-primary btn-lg winners__btn mb-5">Подгрузить еще</button>' 
                            : '';
            
            return `
                <!-- Component styles -->
                <style>
                    ${this._style()}
                </style>
                <!-- Component html -->
                <div class="container">
                    <div class="row">
                        <div class="winners">
                            ${result}
                        </div>
                        ${buttonMore}
                    </div>
                </div>
            `;

        }

        /**
         * Get a card template.
         * @param {String} urlImg - image url value.
         * @param {String} userName - username value.
         * @return {String} card template.
         */
        _getTemplateCard(urlImg = '', userName = '') {
            return `
            <div class="winners__card">
            <p class="winners__owner">User: <b>${userName}</b></p>
                <div class="winners__wrap"> 
                    <img class="winners__img" src="${urlImg}">
                </div>
            </div>    
            `;
        }
    
        /**
         * Get the style winners template.
         * @return {string} winners style.
         */
        _style() {
            return `
                .winners{
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                }
                .winners__card{
                    display: flex;
                    width: 20%;
                    flex-wrap: wrap;
                    padding: 10px;
                    box-shadow: 1px 1px 2px 0px rgba(51, 51, 51, 0.15);
                    margin: 25px 0;
                }
                .winners__img{
                    position: absolute;
                    height: auto;
                    width: 100%;
                    max-width: unset;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
                .winners__wrap {
                    position: relative;
                    overflow: hidden;
                    width: 200px;
                    height: 200px;
                    margin: 15px auto;
                }
                .winners__owner {
                    text-align: center;
                    color: #000;
                    font-size: 16px;
                }
                .winners__owner b {
                    color: #e12ebc;
                }

                .winners__btn {
                    margin: auto;
                }
            `;
        }
    
        /**
         * After the render.
         */
        afterRender() { 
            let btnMore = document.querySelector('.winners__btn');

            if (!btnMore) {
                return;
            }

            btnMore.addEventListener('click',  (event) => {
                event.preventDefault();

                // Load winners ...
            });
        }

    }