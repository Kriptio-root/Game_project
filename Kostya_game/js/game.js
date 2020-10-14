let game = {// כל הפעולות אנחנו עושים פה כל הלוגיקה של המשחק פה זה משתנה גלובאלי יחיד בפרוייקט
    ctx: null,//אומר שמשתנה יכול לקבל ערך של אובייקט
    platform: null,
    ball: null,
    blocks:[],//empty arr for blocks
    rows:4,//rows for blocks
    cols:8,//cols for blocks
    sprites: {
        background: null,
        ball: null,
        platform: null,
        block:null//block obj
    },
    init: function () {
        this.ctx = document.getElementById("mycanvas").getContext("2d");//מקבלים כלים של קאנבס לעבודה עם גרפיקה 2ד
        this.setEvents();
    },
    setEvents(){
        window.addEventListener("keydown",e=>{
            console.log(e);
        });
    },
    preload(callback) {
        let loaded = 0;
        let required = Object.keys(this.sprites).length;// מקבלים כמות מפתחות(משתנים) ב SPRITES 
        let onImageLoad=()=>{
            ++loaded;//בכל הורדה של תמונה מוסעיפים 1 למשתנה כאשר מגיע לכמות הנדרש מפעיל את הפונקציה
            if (loaded >= required) {
                callback();
            }
        };
        for (let key in this.sprites) {//for each key in object sprites
            this.sprites[key] = new Image();//call constructor
            this.sprites[key].src = "img/" + key + ".png";
            this.sprites[key].addEventListener("load",onImageLoad);
        }
    },
    create(){
        for(let row=0;row<this.rows;row++)
        for(let col=0;col<this.cols;col++)
        this.blocks.push(
            {
                x:(60+4)*col+65,//(block w+col gap)*col+margin left
                y:(20+4)*row+35//(block h+row gap)*+margin top

            }
        );
    },
    run() {
        //this.ctx.drawImage(background,0,0);//אומרים לקאנבס איזה ציור אנחנו מתחננים לצייר ושאנחנו רוצים להתחיל מ 0 0 זה פינה אליונה שמאלית
        window.requestAnimationFrame(() => {
            this.render();
        });//אומריל בדפדפן שמפריים הבא צריך לצייר כל משאנחנו תיחננו(במקראה שלנו שורה הנ"ל) 

    },
    render() {
        this.ctx.drawImage(this.sprites.background, 0, 0);//מציירים כל משפונקציה מקבלת
        this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);//this=game
        this.ctx.drawImage(this.sprites.ball, 0, 0, this.ball.width, this.ball.height, this.ball.x, this.ball.y, this.ball.width, this.ball.height);//מציירים את הכדור פאר פריים
        this.renderBlocks();
    },
    renderBlocks() {
    for(let block of this.blocks){
        this.ctx.drawImage(this.sprites.block,block.x,block.y);
    }
},
    start: function () {//מטודה שלמעילה את המשחק

        this.init();
        this.preload(()=>{//callback
            this.create();//בנייה של בלוקים על המפה
            this.run();
        });

    }
};
game.platform = {
    x: 280,
    y: 300
};
game.ball = {
    x: 320,
    y: 280,
    width: 20,
    height: 20
};
window.addEventListener("load", () => {//הפעלת פונקציה רק לאחר שכל התאגים נטענו

    game.start();

});

