let game = {// כל הפעולות אנחנו עושים פה כל הלוגיקה של המשחק פה זה משתנה גלובאלי יחיד בפרוייקט
 
    ctx:null,//אומר שמשתנה יכול לקבל ערך של אובייקט
    sprites:{
    background:null,
    ball:null,
    platform:null
    },
    init: function () {
        this.ctx = document.getElementById("mycanvas").getContext("2d");//מקבלים כלים של קאנבס לעבודה עם גרפיקה 2ד
    },
    preload() {
        let loaded=0;
        let required=Object.keys(this.sprites).length;// מקבלים כמות מפתחות(משתנים) ב SPRITES 

        for(let key in this.sprites){//for each key in object sprites
        this.sprites[key] = new Image();//call constructor
        this.sprites[key].src = "/img/"+key+".png";//*********************** */
        this.sprites[key].addEventListener("load",()=>{
            ++loaded;//בכל הורדה של תמונה מוסעיפים 1 למשתנה כאשר מגיע לכמות הנדרש מפעיל את הפונקציה
            if(loaded>=required)
            {
                this.run();
            }
        })
    }},
    run() {
        //this.ctx.drawImage(background,0,0);//אומרים לקאנבס איזה ציור אנחנו מתחננים לצייר ושאנחנו רוצים להתחיל מ 0 0 זה פינה אליונה שמאלית
        window.requestAnimationFrame(() => {
this.render();
        });//אומריל בדפדפן שמפריים הבא צריך לצייר כל משאנחנו תיחננו(במקראה שלנו שורה הנ"ל) 

    },
    render(){ 
            this.ctx.drawImage(this.sprites.background, 0, 0);//מציירים כל משפונקציה מקבלת
            this.ctx.drawImage(this.sprites.ball, 0, 0);//this=game
            this.ctx.drawImage(this.sprites.platform, 0, 0);
    },
    start: function () {//מטודה שלמעילה את המשחק

        this.init();
        this.preload();
        this.run();

    }
};
window.addEventListener("load", () => {//הפעלת פונקציה רק לאחר שכל התאגים נטענו

    game.start();

});

