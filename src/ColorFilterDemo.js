
// // //颜色滤镜
// // //初始化舞台
// // Laya.init(1334,750,Laya.WebGL);


// // //设置舞台背景色
// // Laya.stage.bgColor = "#fff";
// // //原始位图
// // createImg(100,50);
// // //红色滤镜
// // createRedFilter();
// // //灰色滤镜
// // createGrayFilter();

// // //创建位图
// // function createImg(w,h){
// //     var Img = new Laya.Sprite();
// //     //添加到舞台
// //     Laya.stage.addChild(Img);
// //     //加载显示图片
// //     Img.loadImage('res/img/animal/monkey2.png',w,h);
// //     return Img;
// // }
// // //创建红色滤镜位图
// // function createRedFilter(){
// //     //颜色矩阵，红色
// //     var colorMatrix = [
// //         1,0,0,0,0, //R
// //         0,0,0,0,0, //G
// //         0,0,0,0,0, //B
// //         0,0,0,1,0, //A
// //     ];

// //     //创建颜色滤镜
// //     var redFilter = new Laya.ColorFilter(colorMatrix);

// //     //在坐标280,50位置创建一个位图
// //     var img = createImg(280,50);
// //     img.filters = [redFilter];
// // }
// // //创建灰色滤镜位图
// // function createGrayFilter(){
// //     //颜色滤镜矩阵，灰色
// //     var colorMatrix = [
// //         0.3086, 0.6094, 0.0820, 0, 0,  //R
// //         0.3086, 0.6094, 0.0820, 0, 0, //G
// //         0.3086, 0.6094, 0.0820, 0, 0,  //B
// //         0, 0, 0, 1, 0, //A        
// //     ];

// //     //创建灰色滤镜
// //     var GrayFilter = new Laya.ColorFilter(colorMatrix);

// //     //坐标460,50位置创建一个位图
// //     var img = createImg(460,50);
// //     //添加灰色滤镜效果
// //     img.filters = [GrayFilter];
// // }

// // //发光与阴影滤镜-----------------------------
// // //初始化舞台
// // Laya.init(1334,750,Laya.WebGL);
// // //设置舞台背景色
// // Laya.stage.bgColor = "#fff";
// // //原始位图
// // createImg(100,50);
// // //发光滤镜
// // createGlowFilter();
// // //阴影滤镜
// // createShadeFilter();

// // //创建位图
// // function createImg(x,y){
// //     var Img = new Laya.Sprite();
// //     //添加到舞台
// //     Laya.stage.addChild(Img);
// //     //加载显示图片，坐标位于100,50
// //     Img.loadImage('res/img/animal/monkey2.png',x,y);
// //     return Img;
// // }

// // //创建发光滤镜位图
// // function createGlowFilter(){
// //     //创建发光滤镜位图
// //     var glowFilter = new Laya.GlowFilter('#ff0000',15,0,0);
// //     //在坐标280,50创建位图
// //     var img = createImg(280,50);
// //     //添加发光滤镜
// //     img.filters = [glowFilter];
// // }

// // //创建阴影滤镜位图
// // function createShadeFilter(){
// //     //创建阴影滤镜
// //     var glowFilter = new Laya.GlowFilter('#000',8,8,8);
// //     //在坐标460,50创建位图
// //     var img = createImg(460,50);
// //     //添加阴影滤镜
// //     img.filters = [glowFilter];
// // }

// //模糊滤镜-----------------------------
// //初始化舞台
// Laya.init(1334,750,Laya.WebGL);
// //设置舞台背景色
// Laya.stage.bgColor = "#fff";
// //原始位图
// createImg(100,50);
// //模糊滤镜
// createBlurFilter();

// //创建位图
// function createImg(x,y){
//     var Img = new Laya.Sprite();
//     //添加到舞台
//     Laya.stage.addChild(Img);
//     //加载显示图片,坐标100,50
//     Img.loadImage('res/img/animal/monkey2.png',x,y);
//     return Img;
// }

// //创建模糊滤镜位图
// function createBlurFilter(){
//     //创建模糊滤镜示例
//     var blurFilter = new Laya.BlurFilter();
//     //设置模糊强度
//     blurFilter.strength = 20;
//     //坐标280,50创建位图
//     var img = createImg(280,50);
//     //添加滤镜效果
//     img.filters = [blurFilter];
// }