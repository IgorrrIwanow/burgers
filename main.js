class GamburgerOrder {
    constructor() {
        this.checkboxBtns = document.querySelectorAll('.check');
        this.bigBurgerBtn = document.querySelector('.big-burger-btn');
        this.smallBurgerBtn = document.querySelector('.small-burger-btn');
        this.totalPrice = document.querySelector('.total-price');
        this.totalCal = document.querySelector('.total-cal');
        this.sum = 0;
        this.cal = 0;
        this.addListenerForCheckbox();
        this.addListenerForBigBurgerBtn();
        this.addListenerForSmallBurgerBtn();
    }

    addListenerForBigBurgerBtn() {
        this.bigBurgerBtn.addEventListener('change', event => {
            this.incrementPrice(event);
            this.incrementCal(event);
            event.target.classList.add('checked');
            if (this.smallBurgerBtn.classList.contains('checked')) {
                this.sum -= parseInt(this.smallBurgerBtn.dataset.price);
                this.totalPrice.innerHTML = this.sum;
                this.cal -= parseInt(this.smallBurgerBtn.dataset.cal);
                this.totalCal.innerHTML = this.cal;
            }
        })
    }

    addListenerForSmallBurgerBtn() {
        this.smallBurgerBtn.addEventListener('change', event => {
            this.incrementPrice(event);
            this.incrementCal(event);
            event.target.classList.add('checked');
            if (this.bigBurgerBtn.classList.contains('checked')) {
                this.sum -= parseInt(this.bigBurgerBtn.dataset.price);
                this.totalPrice.innerHTML = this.sum;
                this.cal -= parseInt(this.bigBurgerBtn.dataset.cal);
                this.totalCal.innerHTML = this.cal;
            }
        })
    }

    addListenerForCheckbox() {
        this.checkboxBtns.forEach(btn => {
            btn.addEventListener('change', event => {
                if (event.target.checked) {
                    this.incrementPrice(event);
                    this.incrementCal(event);
                } else {
                    this.dicrementPrice(event);
                    this.dicrementCal(event);
                }
            })
        })
    }

    incrementPrice(event) {
        this.sum += Number(event.target.dataset.price);
        this.totalPrice.innerHTML = this.sum;
    }

    incrementCal(event) {
        this.cal += Number(event.target.dataset.cal);
        this.totalCal.innerHTML = this.cal;
    }

    dicrementPrice(event) {
        this.sum -= Number(event.target.dataset.price);
        this.totalPrice.innerHTML = this.sum;
    }

    dicrementCal(event) {
        this.cal -= Number(event.target.dataset.cal);
        this.totalCal.innerHTML = this.cal;
    }
}

let gambOrder = new GamburgerOrder();