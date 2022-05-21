export type ColorSpec = {
    hex: string;
    rgb: Array<number>;
    hsv: Array<number>;
};

export const color = {
    filterCssColorSpec: () => {
        let colors = {};
        let colorIndex: Array<string> = [];
        for (const [key, value] of Object.entries(color.cssColorSpec)) {
            let rgb: Array<number> = value.rgb;
            let hsv: Array<number> = color.rgbToHsv(
                value.rgb[0],
                value.rgb[1],
                value.rgb[2]
            );

            // ignore low values
            if (hsv[2] < 0.2) {
                continue;
            }

            // ignore similar colors
            rgb = rgb.map((v) => Math.floor(v / 20));
            if (colorIndex.indexOf(rgb.join()) >= 0) {
                continue;
            }
            colorIndex.push(rgb.join());

            // @ts-ignore
            colors[key] = {
                hex: value.hex,
                rgb: value.rgb,
                hsv: color.rgbToHsv(value.rgb[0], value.rgb[1], value.rgb[2]),
            };
        }
        console.log(colors);
    },
    uniqueColorSpec: {
        aliceblue: {
            hex: '#f0f8ff',
            rgb: [240, 248, 255],
            hsv: [208, 0.058823529411764705, 1],
        },
        antiquewhite: {
            hex: '#faebd7',
            rgb: [250, 235, 215],
            hsv: [34.285714285714285, 0.14, 0.9803921568627451],
        },
        aqua: {
            hex: '#00ffff',
            rgb: [0, 255, 255],
            hsv: [180, 1, 1],
        },
        aquamarine: {
            hex: '#7fffd4',
            rgb: [127, 255, 212],
            hsv: [159.84375, 0.5019607843137255, 1],
        },
        beige: {
            hex: '#f5f5dc',
            rgb: [245, 245, 220],
            hsv: [60, 0.10204081632653061, 0.9607843137254902],
        },
        bisque: {
            hex: '#ffe4c4',
            rgb: [255, 228, 196],
            hsv: [32.54237288135593, 0.23137254901960785, 1],
        },
        blue: {
            hex: '#0000ff',
            rgb: [0, 0, 255],
            hsv: [240, 1, 1],
        },
        blueviolet: {
            hex: '#8a2be2',
            rgb: [138, 43, 226],
            hsv: [271.1475409836066, 0.8097345132743363, 0.8862745098039215],
        },
        brown: {
            hex: '#a52a2a',
            rgb: [165, 42, 42],
            hsv: [0, 0.7454545454545455, 0.6470588235294118],
        },
        burlywood: {
            hex: '#deb887',
            rgb: [222, 184, 135],
            hsv: [33.79310344827586, 0.3918918918918919, 0.8705882352941177],
        },
        cadetblue: {
            hex: '#5f9ea0',
            rgb: [95, 158, 160],
            hsv: [181.84615384615384, 0.40625, 0.6274509803921569],
        },
        chartreuse: {
            hex: '#7fff00',
            rgb: [127, 255, 0],
            hsv: [90.11764705882354, 1, 1],
        },
        chocolate: {
            hex: '#d2691e',
            rgb: [210, 105, 30],
            hsv: [25, 0.8571428571428571, 0.8235294117647058],
        },
        coral: {
            hex: '#ff7f50',
            rgb: [255, 127, 80],
            hsv: [16.114285714285714, 0.6862745098039216, 1],
        },
        cornflowerblue: {
            hex: '#6495ed',
            rgb: [100, 149, 237],
            hsv: [218.54014598540147, 0.5780590717299579, 0.9294117647058824],
        },
        crimson: {
            hex: '#dc143c',
            rgb: [220, 20, 60],
            hsv: [348, 0.9090909090909091, 0.8627450980392157],
        },
        darkblue: {
            hex: '#00008b',
            rgb: [0, 0, 139],
            hsv: [240, 1, 0.5450980392156862],
        },
        darkcyan: {
            hex: '#008b8b',
            rgb: [0, 139, 139],
            hsv: [180, 1, 0.5450980392156862],
        },
        darkgoldenrod: {
            hex: '#b8860b',
            rgb: [184, 134, 11],
            hsv: [42.65895953757226, 0.9402173913043478, 0.7215686274509804],
        },
        darkgray: {
            hex: '#a9a9a9',
            rgb: [169, 169, 169],
            hsv: [0, 0, 0.6627450980392157],
        },
        darkgreen: {
            hex: '#006400',
            rgb: [0, 100, 0],
            hsv: [120, 1, 0.39215686274509803],
        },
        darkkhaki: {
            hex: '#bdb76b',
            rgb: [189, 183, 107],
            hsv: [55.609756097560975, 0.43386243386243384, 0.7411764705882353],
        },
        darkmagenta: {
            hex: '#8b008b',
            rgb: [139, 0, 139],
            hsv: [300, 1, 0.5450980392156862],
        },
        darkolivegreen: {
            hex: '#556b2f',
            rgb: [85, 107, 47],
            hsv: [82, 0.5607476635514018, 0.4196078431372549],
        },
        darkorange: {
            hex: '#ff8c00',
            rgb: [255, 140, 0],
            hsv: [32.94117647058824, 1, 1],
        },
        darkorchid: {
            hex: '#9932cc',
            rgb: [153, 50, 204],
            hsv: [280.12987012987014, 0.7549019607843137, 0.8],
        },
        darkred: {
            hex: '#8b0000',
            rgb: [139, 0, 0],
            hsv: [0, 1, 0.5450980392156862],
        },
        darksalmon: {
            hex: '#e9967a',
            rgb: [233, 150, 122],
            hsv: [15.135135135135133, 0.47639484978540775, 0.9137254901960784],
        },
        darkseagreen: {
            hex: '#8fbc8f',
            rgb: [143, 188, 143],
            hsv: [120, 0.2393617021276596, 0.7372549019607844],
        },
        darkslateblue: {
            hex: '#483d8b',
            rgb: [72, 61, 139],
            hsv: [248.46153846153848, 0.5611510791366906, 0.5450980392156862],
        },
        darkslategray: {
            hex: '#2f4f4f',
            rgb: [47, 79, 79],
            hsv: [180, 0.4050632911392405, 0.30980392156862746],
        },
        darkturquoise: {
            hex: '#00ced1',
            rgb: [0, 206, 209],
            hsv: [180.86124401913875, 1, 0.8196078431372549],
        },
        darkviolet: {
            hex: '#9400d3',
            rgb: [148, 0, 211],
            hsv: [282.085308056872, 1, 0.8274509803921568],
        },
        deeppink: {
            hex: '#ff1493',
            rgb: [255, 20, 147],
            hsv: [327.5744680851064, 0.9215686274509803, 1],
        },
        deepskyblue: {
            hex: '#00bfff',
            rgb: [0, 191, 255],
            hsv: [195.05882352941177, 1, 1],
        },
        dimgray: {
            hex: '#696969',
            rgb: [105, 105, 105],
            hsv: [0, 0, 0.4117647058823529],
        },
        dodgerblue: {
            hex: '#1e90ff',
            rgb: [30, 144, 255],
            hsv: [209.6, 0.8823529411764706, 1],
        },
        firebrick: {
            hex: '#b22222',
            rgb: [178, 34, 34],
            hsv: [0, 0.8089887640449438, 0.6980392156862745],
        },
        forestgreen: {
            hex: '#228b22',
            rgb: [34, 139, 34],
            hsv: [120, 0.7553956834532374, 0.5450980392156862],
        },
        fuchsia: {
            hex: '#ff00ff',
            rgb: [255, 0, 255],
            hsv: [300, 1, 1],
        },
        gainsboro: {
            hex: '#dcdcdc',
            rgb: [220, 220, 220],
            hsv: [0, 0, 0.8627450980392157],
        },
        gold: {
            hex: '#ffd700',
            rgb: [255, 215, 0],
            hsv: [50.588235294117645, 1, 1],
        },
        goldenrod: {
            hex: '#daa520',
            rgb: [218, 165, 32],
            hsv: [42.903225806451616, 0.8532110091743119, 0.8549019607843137],
        },
        gray: {
            hex: '#808080',
            rgb: [128, 128, 128],
            hsv: [0, 0, 0.5019607843137255],
        },
        green: {
            hex: '#008000',
            rgb: [0, 128, 0],
            hsv: [120, 1, 0.5019607843137255],
        },
        greenyellow: {
            hex: '#adff2f',
            rgb: [173, 255, 47],
            hsv: [83.65384615384615, 0.8156862745098039, 1],
        },
        hotpink: {
            hex: '#ff69b4',
            rgb: [255, 105, 180],
            hsv: [330, 0.5882352941176471, 1],
        },
        indianred: {
            hex: '#cd5c5c',
            rgb: [205, 92, 92],
            hsv: [0, 0.551219512195122, 0.803921568627451],
        },
        indigo: {
            hex: '#4b0082',
            rgb: [75, 0, 130],
            hsv: [274.6153846153846, 1, 0.5098039215686274],
        },
        khaki: {
            hex: '#f0e68c',
            rgb: [240, 230, 140],
            hsv: [54, 0.4166666666666667, 0.9411764705882353],
        },
        lavender: {
            hex: '#e6e6fa',
            rgb: [230, 230, 250],
            hsv: [240, 0.08, 0.9803921568627451],
        },
        lemonchiffon: {
            hex: '#fffacd',
            rgb: [255, 250, 205],
            hsv: [54, 0.19607843137254902, 1],
        },
        lightblue: {
            hex: '#add8e6',
            rgb: [173, 216, 230],
            hsv: [194.73684210526315, 0.24782608695652175, 0.9019607843137255],
        },
        lightcoral: {
            hex: '#f08080',
            rgb: [240, 128, 128],
            hsv: [0, 0.4666666666666667, 0.9411764705882353],
        },
        lightcyan: {
            hex: '#e0ffff',
            rgb: [224, 255, 255],
            hsv: [180, 0.12156862745098039, 1],
        },
        lightgray: {
            hex: '#d3d3d3',
            rgb: [211, 211, 211],
            hsv: [0, 0, 0.8274509803921568],
        },
        lightgreen: {
            hex: '#90ee90',
            rgb: [144, 238, 144],
            hsv: [120, 0.3949579831932773, 0.9333333333333333],
        },
        lightpink: {
            hex: '#ffb6c1',
            rgb: [255, 182, 193],
            hsv: [350.95890410958907, 0.28627450980392155, 1],
        },
        lightsalmon: {
            hex: '#ffa07a',
            rgb: [255, 160, 122],
            hsv: [17.142857142857142, 0.5215686274509804, 1],
        },
        lightseagreen: {
            hex: '#20b2aa',
            rgb: [32, 178, 170],
            hsv: [176.71232876712327, 0.8202247191011236, 0.6980392156862745],
        },
        lightskyblue: {
            hex: '#87cefa',
            rgb: [135, 206, 250],
            hsv: [202.95652173913044, 0.46, 0.9803921568627451],
        },
        lightslategray: {
            hex: '#778899',
            rgb: [119, 136, 153],
            hsv: [210, 0.2222222222222222, 0.6],
        },
        lightsteelblue: {
            hex: '#b0c4de',
            rgb: [176, 196, 222],
            hsv: [213.91304347826087, 0.2072072072072072, 0.8705882352941177],
        },
        lime: {
            hex: '#00ff00',
            rgb: [0, 255, 0],
            hsv: [120, 1, 1],
        },
        limegreen: {
            hex: '#32cd32',
            rgb: [50, 205, 50],
            hsv: [120, 0.7560975609756098, 0.803921568627451],
        },
        mediumaquamarine: {
            hex: '#66cdaa',
            rgb: [102, 205, 170],
            hsv: [159.6116504854369, 0.5024390243902439, 0.803921568627451],
        },
        mediumblue: {
            hex: '#0000cd',
            rgb: [0, 0, 205],
            hsv: [240, 1, 0.803921568627451],
        },
        mediumorchid: {
            hex: '#ba55d3',
            rgb: [186, 85, 211],
            hsv: [288.0952380952381, 0.5971563981042654, 0.8274509803921568],
        },
        mediumpurple: {
            hex: '#9370db',
            rgb: [147, 112, 219],
            hsv: [259.6261682242991, 0.4885844748858447, 0.8588235294117647],
        },
        mediumseagreen: {
            hex: '#3cb371',
            rgb: [60, 179, 113],
            hsv: [146.72268907563026, 0.664804469273743, 0.7019607843137254],
        },
        mediumslateblue: {
            hex: '#7b68ee',
            rgb: [123, 104, 238],
            hsv: [248.50746268656715, 0.5630252100840336, 0.9333333333333333],
        },
        mediumspringgreen: {
            hex: '#00fa9a',
            rgb: [0, 250, 154],
            hsv: [156.96, 1, 0.9803921568627451],
        },
        mediumturquoise: {
            hex: '#48d1cc',
            rgb: [72, 209, 204],
            hsv: [177.8102189781022, 0.6555023923444976, 0.8196078431372549],
        },
        mediumvioletred: {
            hex: '#c71585',
            rgb: [199, 21, 133],
            hsv: [322.24719101123594, 0.8944723618090452, 0.7803921568627451],
        },
        midnightblue: {
            hex: '#191970',
            rgb: [25, 25, 112],
            hsv: [240, 0.7767857142857143, 0.4392156862745098],
        },
        mistyrose: {
            hex: '#ffe4e1',
            rgb: [255, 228, 225],
            hsv: [6, 0.11764705882352941, 1],
        },
        navajowhite: {
            hex: '#ffdead',
            rgb: [255, 222, 173],
            hsv: [35.853658536585364, 0.3215686274509804, 1],
        },
        olive: {
            hex: '#808000',
            rgb: [128, 128, 0],
            hsv: [60, 1, 0.5019607843137255],
        },
        olivedrab: {
            hex: '#6b8e23',
            rgb: [107, 142, 35],
            hsv: [79.62616822429906, 0.7535211267605634, 0.5568627450980392],
        },
        orange: {
            hex: '#ffa500',
            rgb: [255, 165, 0],
            hsv: [38.82352941176471, 1, 1],
        },
        orangered: {
            hex: '#ff4500',
            rgb: [255, 69, 0],
            hsv: [16.235294117647058, 1, 1],
        },
        orchid: {
            hex: '#da70d6',
            rgb: [218, 112, 214],
            hsv: [302.2641509433962, 0.48623853211009177, 0.8549019607843137],
        },
        palegoldenrod: {
            hex: '#eee8aa',
            rgb: [238, 232, 170],
            hsv: [54.705882352941174, 0.2857142857142857, 0.9333333333333333],
        },
        palegreen: {
            hex: '#98fb98',
            rgb: [152, 251, 152],
            hsv: [120, 0.3944223107569721, 0.984313725490196],
        },
        paleturquoise: {
            hex: '#afeeee',
            rgb: [175, 238, 238],
            hsv: [180, 0.2647058823529412, 0.9333333333333333],
        },
        palevioletred: {
            hex: '#db7093',
            rgb: [219, 112, 147],
            hsv: [340.3738317757009, 0.4885844748858447, 0.8588235294117647],
        },
        peachpuff: {
            hex: '#ffdab9',
            rgb: [255, 218, 185],
            hsv: [28.285714285714285, 0.27450980392156865, 1],
        },
        peru: {
            hex: '#cd853f',
            rgb: [205, 133, 63],
            hsv: [29.577464788732396, 0.6926829268292682, 0.803921568627451],
        },
        pink: {
            hex: '#ffc0cb',
            rgb: [255, 192, 203],
            hsv: [349.5238095238095, 0.24705882352941178, 1],
        },
        plum: {
            hex: '#dda0dd',
            rgb: [221, 160, 221],
            hsv: [300, 0.27601809954751133, 0.8666666666666667],
        },
        rebeccapurple: {
            hex: '#663399',
            rgb: [102, 51, 153],
            hsv: [270, 0.6666666666666666, 0.6],
        },
        red: {
            hex: '#ff0000',
            rgb: [255, 0, 0],
            hsv: [0, 1, 1],
        },
        rosybrown: {
            hex: '#bc8f8f',
            rgb: [188, 143, 143],
            hsv: [0, 0.2393617021276596, 0.7372549019607844],
        },
        royalblue: {
            hex: '#4169e1',
            rgb: [65, 105, 225],
            hsv: [225, 0.7111111111111111, 0.8823529411764706],
        },
        saddlebrown: {
            hex: '#8b4513',
            rgb: [139, 69, 19],
            hsv: [25, 0.8633093525179856, 0.5450980392156862],
        },
        salmon: {
            hex: '#fa8072',
            rgb: [250, 128, 114],
            hsv: [6.1764705882352935, 0.544, 0.9803921568627451],
        },
        sandybrown: {
            hex: '#f4a460',
            rgb: [244, 164, 96],
            hsv: [27.56756756756757, 0.6065573770491803, 0.9568627450980393],
        },
        seagreen: {
            hex: '#2e8b57',
            rgb: [46, 139, 87],
            hsv: [146.45161290322582, 0.6690647482014388, 0.5450980392156862],
        },
        sienna: {
            hex: '#a0522d',
            rgb: [160, 82, 45],
            hsv: [19.304347826086953, 0.71875, 0.6274509803921569],
        },
        silver: {
            hex: '#c0c0c0',
            rgb: [192, 192, 192],
            hsv: [0, 0, 0.7529411764705882],
        },
        skyblue: {
            hex: '#87ceeb',
            rgb: [135, 206, 235],
            hsv: [197.4, 0.425531914893617, 0.9215686274509803],
        },
        slateblue: {
            hex: '#6a5acd',
            rgb: [106, 90, 205],
            hsv: [248.34782608695653, 0.5609756097560976, 0.803921568627451],
        },
        springgreen: {
            hex: '#00ff7f',
            rgb: [0, 255, 127],
            hsv: [149.88235294117646, 1, 1],
        },
        steelblue: {
            hex: '#4682b4',
            rgb: [70, 130, 180],
            hsv: [207.27272727272728, 0.6111111111111112, 0.7058823529411765],
        },
        tan: {
            hex: '#d2b48c',
            rgb: [210, 180, 140],
            hsv: [34.285714285714285, 0.3333333333333333, 0.8235294117647058],
        },
        thistle: {
            hex: '#d8bfd8',
            rgb: [216, 191, 216],
            hsv: [300, 0.11574074074074074, 0.8470588235294118],
        },
        tomato: {
            hex: '#ff6347',
            rgb: [255, 99, 71],
            hsv: [9.130434782608695, 0.7215686274509804, 1],
        },
        turquoise: {
            hex: '#40e0d0',
            rgb: [64, 224, 208],
            hsv: [174, 0.7142857142857143, 0.8784313725490196],
        },
        violet: {
            hex: '#ee82ee',
            rgb: [238, 130, 238],
            hsv: [300, 0.453781512605042, 0.9333333333333333],
        },
        yellow: {
            hex: '#ffff00',
            rgb: [255, 255, 0],
            hsv: [60, 1, 1],
        },
        yellowgreen: {
            hex: '#9acd32',
            rgb: [154, 205, 50],
            hsv: [79.74193548387098, 0.7560975609756098, 0.803921568627451],
        },
    },
    cssColorSpec: {
        aliceblue: {
            name: 'aliceblue',
            hex: '#f0f8ff',
            rgbCSS: 'rgb(240, 248, 255)',
            rgb: [240, 248, 255],
            hslCss: 'hsl(208, 100%, 97.1%)',
        },
        antiquewhite: {
            name: 'antiquewhite',
            hex: '#faebd7',
            rgbCSS: 'rgb(250, 235, 215)',
            rgb: [250, 235, 215],
            hslCss: 'hsl(34, 77.8%, 91.2%)',
        },
        aqua: {
            name: 'aqua',
            hex: '#00ffff',
            rgbCSS: 'rgb(0, 255, 255)',
            rgb: [0, 255, 255],
            hslCss: 'hsl(180, 100%, 50%)',
        },
        aquamarine: {
            name: 'aquamarine',
            hex: '#7fffd4',
            rgbCSS: 'rgb(127, 255, 212)',
            rgb: [127, 255, 212],
            hslCss: 'hsl(160, 100%, 74.9%)',
        },
        azure: {
            name: 'azure',
            hex: '#f0ffff',
            rgbCSS: 'rgb(240, 255, 255)',
            rgb: [240, 255, 255],
            hslCss: 'hsl(180, 100%, 97.1%)',
        },
        beige: {
            name: 'beige',
            hex: '#f5f5dc',
            rgbCSS: 'rgb(245, 245, 220)',
            rgb: [245, 245, 220],
            hslCss: 'hsl(60, 55.6%, 91.2%)',
        },
        bisque: {
            name: 'bisque',
            hex: '#ffe4c4',
            rgbCSS: 'rgb(255, 228, 196)',
            rgb: [255, 228, 196],
            hslCss: 'hsl(33, 100%, 88.4%)',
        },
        black: {
            name: 'black',
            hex: '#000000',
            rgbCSS: 'rgb(0, 0, 0)',
            rgb: [0, 0, 0],
            hslCss: 'hsl(0, 0%, 0%)',
        },
        blanchedalmond: {
            name: 'blanchedalmond',
            hex: '#ffebcd',
            rgbCSS: 'rgb(255, 235, 205)',
            rgb: [255, 235, 205],
            hslCss: 'hsl(36, 100%, 90.2%)',
        },
        blue: {
            name: 'blue',
            hex: '#0000ff',
            rgbCSS: 'rgb(0, 0, 255)',
            rgb: [0, 0, 255],
            hslCss: 'hsl(240, 100%, 50%)',
        },
        blueviolet: {
            name: 'blueviolet',
            hex: '#8a2be2',
            rgbCSS: 'rgb(138, 43, 226)',
            rgb: [138, 43, 226],
            hslCss: 'hsl(271, 75.9%, 52.7%)',
        },
        brown: {
            name: 'brown',
            hex: '#a52a2a',
            rgbCSS: 'rgb(165, 42, 42)',
            rgb: [165, 42, 42],
            hslCss: 'hsl(0, 59.4%, 40.6%)',
        },
        burlywood: {
            name: 'burlywood',
            hex: '#deb887',
            rgbCSS: 'rgb(222, 184, 135)',
            rgb: [222, 184, 135],
            hslCss: 'hsl(34, 56.9%, 70%)',
        },
        cadetblue: {
            name: 'cadetblue',
            hex: '#5f9ea0',
            rgbCSS: 'rgb(95, 158, 160)',
            rgb: [95, 158, 160],
            hslCss: 'hsl(182, 25.5%, 50%)',
        },
        chartreuse: {
            name: 'chartreuse',
            hex: '#7fff00',
            rgbCSS: 'rgb(127, 255, 0)',
            rgb: [127, 255, 0],
            hslCss: 'hsl(90, 100%, 50%)',
        },
        chocolate: {
            name: 'chocolate',
            hex: '#d2691e',
            rgbCSS: 'rgb(210, 105, 30)',
            rgb: [210, 105, 30],
            hslCss: 'hsl(25, 75%, 47.1%)',
        },
        coral: {
            name: 'coral',
            hex: '#ff7f50',
            rgbCSS: 'rgb(255, 127, 80)',
            rgb: [255, 127, 80],
            hslCss: 'hsl(16, 100%, 65.7%)',
        },
        cornflowerblue: {
            name: 'cornflowerblue',
            hex: '#6495ed',
            rgbCSS: 'rgb(100, 149, 237)',
            rgb: [100, 149, 237],
            hslCss: 'hsl(219, 79.2%, 66.1%)',
        },
        cornsilk: {
            name: 'cornsilk',
            hex: '#fff8dc',
            rgbCSS: 'rgb(255, 248, 220)',
            rgb: [255, 248, 220],
            hslCss: 'hsl(48, 100%, 93.1%)',
        },
        crimson: {
            name: 'crimson',
            hex: '#dc143c',
            rgbCSS: 'rgb(220, 20, 60)',
            rgb: [220, 20, 60],
            hslCss: 'hsl(348, 83.3%, 47.1%)',
        },
        cyan: {
            name: 'cyan',
            hex: '#00ffff',
            rgbCSS: 'rgb(0, 255, 255)',
            rgb: [0, 255, 255],
            hslCss: 'hsl(180, 100%, 50%)',
        },
        darkblue: {
            name: 'darkblue',
            hex: '#00008b',
            rgbCSS: 'rgb(0, 0, 139)',
            rgb: [0, 0, 139],
            hslCss: 'hsl(240, 100%, 27.3%)',
        },
        darkcyan: {
            name: 'darkcyan',
            hex: '#008b8b',
            rgbCSS: 'rgb(0, 139, 139)',
            rgb: [0, 139, 139],
            hslCss: 'hsl(180, 100%, 27.3%)',
        },
        darkgoldenrod: {
            name: 'darkgoldenrod',
            hex: '#b8860b',
            rgbCSS: 'rgb(184, 134, 11)',
            rgb: [184, 134, 11],
            hslCss: 'hsl(43, 88.7%, 38.2%)',
        },
        darkgray: {
            name: 'darkgray',
            hex: '#a9a9a9',
            rgbCSS: 'rgb(169, 169, 169)',
            rgb: [169, 169, 169],
            hslCss: 'hsl(0, 0%, 66.3%)',
        },
        darkgreen: {
            name: 'darkgreen',
            hex: '#006400',
            rgbCSS: 'rgb(0, 100, 0)',
            rgb: [0, 100, 0],
            hslCss: 'hsl(120, 100%, 19.6%)',
        },
        darkgrey: {
            name: 'darkgrey',
            hex: '#a9a9a9',
            rgbCSS: 'rgb(169, 169, 169)',
            rgb: [169, 169, 169],
            hslCss: 'hsl(0, 0%, 66.3%)',
        },
        darkkhaki: {
            name: 'darkkhaki',
            hex: '#bdb76b',
            rgbCSS: 'rgb(189, 183, 107)',
            rgb: [189, 183, 107],
            hslCss: 'hsl(56, 38.3%, 58%)',
        },
        darkmagenta: {
            name: 'darkmagenta',
            hex: '#8b008b',
            rgbCSS: 'rgb(139, 0, 139)',
            rgb: [139, 0, 139],
            hslCss: 'hsl(300, 100%, 27.3%)',
        },
        darkolivegreen: {
            name: 'darkolivegreen',
            hex: '#556b2f',
            rgbCSS: 'rgb(85, 107, 47)',
            rgb: [85, 107, 47],
            hslCss: 'hsl(82, 39%, 30.2%)',
        },
        darkorange: {
            name: 'darkorange',
            hex: '#ff8c00',
            rgbCSS: 'rgb(255, 140, 0)',
            rgb: [255, 140, 0],
            hslCss: 'hsl(33, 100%, 50%)',
        },
        darkorchid: {
            name: 'darkorchid',
            hex: '#9932cc',
            rgbCSS: 'rgb(153, 50, 204)',
            rgb: [153, 50, 204],
            hslCss: 'hsl(280, 60.6%, 49.8%)',
        },
        darkred: {
            name: 'darkred',
            hex: '#8b0000',
            rgbCSS: 'rgb(139, 0, 0)',
            rgb: [139, 0, 0],
            hslCss: 'hsl(0, 100%, 27.3%)',
        },
        darksalmon: {
            name: 'darksalmon',
            hex: '#e9967a',
            rgbCSS: 'rgb(233, 150, 122)',
            rgb: [233, 150, 122],
            hslCss: 'hsl(15, 71.6%, 69.6%)',
        },
        darkseagreen: {
            name: 'darkseagreen',
            hex: '#8fbc8f',
            rgbCSS: 'rgb(143, 188, 143)',
            rgb: [143, 188, 143],
            hslCss: 'hsl(120, 25.1%, 64.9%)',
        },
        darkslateblue: {
            name: 'darkslateblue',
            hex: '#483d8b',
            rgbCSS: 'rgb(72, 61, 139)',
            rgb: [72, 61, 139],
            hslCss: 'hsl(248, 39%, 39.2%)',
        },
        darkslategray: {
            name: 'darkslategray',
            hex: '#2f4f4f',
            rgbCSS: 'rgb(47, 79, 79)',
            rgb: [47, 79, 79],
            hslCss: 'hsl(180, 25.4%, 24.7%)',
        },
        darkslategrey: {
            name: 'darkslategrey',
            hex: '#2f4f4f',
            rgbCSS: 'rgb(47, 79, 79)',
            rgb: [47, 79, 79],
            hslCss: 'hsl(180, 25.4%, 24.7%)',
        },
        darkturquoise: {
            name: 'darkturquoise',
            hex: '#00ced1',
            rgbCSS: 'rgb(0, 206, 209)',
            rgb: [0, 206, 209],
            hslCss: 'hsl(181, 100%, 41%)',
        },
        darkviolet: {
            name: 'darkviolet',
            hex: '#9400d3',
            rgbCSS: 'rgb(148, 0, 211)',
            rgb: [148, 0, 211],
            hslCss: 'hsl(282, 100%, 41.4%)',
        },
        deeppink: {
            name: 'deeppink',
            hex: '#ff1493',
            rgbCSS: 'rgb(255, 20, 147)',
            rgb: [255, 20, 147],
            hslCss: 'hsl(328, 100%, 53.9%)',
        },
        deepskyblue: {
            name: 'deepskyblue',
            hex: '#00bfff',
            rgbCSS: 'rgb(0, 191, 255)',
            rgb: [0, 191, 255],
            hslCss: 'hsl(195, 100%, 50%)',
        },
        dimgray: {
            name: 'dimgray',
            hex: '#696969',
            rgbCSS: 'rgb(105, 105, 105)',
            rgb: [105, 105, 105],
            hslCss: 'hsl(0, 0%, 41.2%)',
        },
        dimgrey: {
            name: 'dimgrey',
            hex: '#696969',
            rgbCSS: 'rgb(105, 105, 105)',
            rgb: [105, 105, 105],
            hslCss: 'hsl(0, 0%, 41.2%)',
        },
        dodgerblue: {
            name: 'dodgerblue',
            hex: '#1e90ff',
            rgbCSS: 'rgb(30, 144, 255)',
            rgb: [30, 144, 255],
            hslCss: 'hsl(210, 100%, 55.9%)',
        },
        firebrick: {
            name: 'firebrick',
            hex: '#b22222',
            rgbCSS: 'rgb(178, 34, 34)',
            rgb: [178, 34, 34],
            hslCss: 'hsl(0, 67.9%, 41.6%)',
        },
        floralwhite: {
            name: 'floralwhite',
            hex: '#fffaf0',
            rgbCSS: 'rgb(255, 250, 240)',
            rgb: [255, 250, 240],
            hslCss: 'hsl(40, 100%, 97.1%)',
        },
        forestgreen: {
            name: 'forestgreen',
            hex: '#228b22',
            rgbCSS: 'rgb(34, 139, 34)',
            rgb: [34, 139, 34],
            hslCss: 'hsl(120, 60.7%, 33.9%)',
        },
        fuchsia: {
            name: 'fuchsia',
            hex: '#ff00ff',
            rgbCSS: 'rgb(255, 0, 255)',
            rgb: [255, 0, 255],
            hslCss: 'hsl(300, 100%, 50%)',
        },
        gainsboro: {
            name: 'gainsboro',
            hex: '#dcdcdc',
            rgbCSS: 'rgb(220, 220, 220)',
            rgb: [220, 220, 220],
            hslCss: 'hsl(0, 0%, 86.3%)',
        },
        ghostwhite: {
            name: 'ghostwhite',
            hex: '#f8f8ff',
            rgbCSS: 'rgb(248, 248, 255)',
            rgb: [248, 248, 255],
            hslCss: 'hsl(240, 100%, 98.6%)',
        },
        gold: {
            name: 'gold',
            hex: '#ffd700',
            rgbCSS: 'rgb(255, 215, 0)',
            rgb: [255, 215, 0],
            hslCss: 'hsl(51, 100%, 50%)',
        },
        goldenrod: {
            name: 'goldenrod',
            hex: '#daa520',
            rgbCSS: 'rgb(218, 165, 32)',
            rgb: [218, 165, 32],
            hslCss: 'hsl(43, 74.4%, 49%)',
        },
        gray: {
            name: 'gray',
            hex: '#808080',
            rgbCSS: 'rgb(128, 128, 128)',
            rgb: [128, 128, 128],
            hslCss: 'hsl(0, 0%, 50.2%)',
        },
        green: {
            name: 'green',
            hex: '#008000',
            rgbCSS: 'rgb(0, 128, 0)',
            rgb: [0, 128, 0],
            hslCss: 'hsl(120, 100%, 25.1%)',
        },
        greenyellow: {
            name: 'greenyellow',
            hex: '#adff2f',
            rgbCSS: 'rgb(173, 255, 47)',
            rgb: [173, 255, 47],
            hslCss: 'hsl(84, 100%, 59.2%)',
        },
        grey: {
            name: 'grey',
            hex: '#808080',
            rgbCSS: 'rgb(128, 128, 128)',
            rgb: [128, 128, 128],
            hslCss: 'hsl(0, 0%, 50.2%)',
        },
        honeydew: {
            name: 'honeydew',
            hex: '#f0fff0',
            rgbCSS: 'rgb(240, 255, 240)',
            rgb: [240, 255, 240],
            hslCss: 'hsl(120, 100%, 97.1%)',
        },
        hotpink: {
            name: 'hotpink',
            hex: '#ff69b4',
            rgbCSS: 'rgb(255, 105, 180)',
            rgb: [255, 105, 180],
            hslCss: 'hsl(330, 100%, 70.6%)',
        },
        indianred: {
            name: 'indianred',
            hex: '#cd5c5c',
            rgbCSS: 'rgb(205, 92, 92)',
            rgb: [205, 92, 92],
            hslCss: 'hsl(0, 53.1%, 58.2%)',
        },
        indigo: {
            name: 'indigo',
            hex: '#4b0082',
            rgbCSS: 'rgb(75, 0, 130)',
            rgb: [75, 0, 130],
            hslCss: 'hsl(275, 100%, 25.5%)',
        },
        ivory: {
            name: 'ivory',
            hex: '#fffff0',
            rgbCSS: 'rgb(255, 255, 240)',
            rgb: [255, 255, 240],
            hslCss: 'hsl(60, 100%, 97.1%)',
        },
        khaki: {
            name: 'khaki',
            hex: '#f0e68c',
            rgbCSS: 'rgb(240, 230, 140)',
            rgb: [240, 230, 140],
            hslCss: 'hsl(54, 76.9%, 74.5%)',
        },
        lavender: {
            name: 'lavender',
            hex: '#e6e6fa',
            rgbCSS: 'rgb(230, 230, 250)',
            rgb: [230, 230, 250],
            hslCss: 'hsl(240, 66.7%, 94.1%)',
        },
        lavenderblush: {
            name: 'lavenderblush',
            hex: '#fff0f5',
            rgbCSS: 'rgb(255, 240, 245)',
            rgb: [255, 240, 245],
            hslCss: 'hsl(340, 100%, 97.1%)',
        },
        lawngreen: {
            name: 'lawngreen',
            hex: '#7cfc00',
            rgbCSS: 'rgb(124, 252, 0)',
            rgb: [124, 252, 0],
            hslCss: 'hsl(90, 100%, 49.4%)',
        },
        lemonchiffon: {
            name: 'lemonchiffon',
            hex: '#fffacd',
            rgbCSS: 'rgb(255, 250, 205)',
            rgb: [255, 250, 205],
            hslCss: 'hsl(54, 100%, 90.2%)',
        },
        lightblue: {
            name: 'lightblue',
            hex: '#add8e6',
            rgbCSS: 'rgb(173, 216, 230)',
            rgb: [173, 216, 230],
            hslCss: 'hsl(195, 53.3%, 79%)',
        },
        lightcoral: {
            name: 'lightcoral',
            hex: '#f08080',
            rgbCSS: 'rgb(240, 128, 128)',
            rgb: [240, 128, 128],
            hslCss: 'hsl(0, 78.9%, 72.2%)',
        },
        lightcyan: {
            name: 'lightcyan',
            hex: '#e0ffff',
            rgbCSS: 'rgb(224, 255, 255)',
            rgb: [224, 255, 255],
            hslCss: 'hsl(180, 100%, 93.9%)',
        },
        lightgoldenrodyellow: {
            name: 'lightgoldenrodyellow',
            hex: '#fafad2',
            rgbCSS: 'rgb(250, 250, 210)',
            rgb: [250, 250, 210],
            hslCss: 'hsl(60, 80%, 90.2%)',
        },
        lightgray: {
            name: 'lightgray',
            hex: '#d3d3d3',
            rgbCSS: 'rgb(211, 211, 211)',
            rgb: [211, 211, 211],
            hslCss: 'hsl(0, 0%, 82.7%)',
        },
        lightgreen: {
            name: 'lightgreen',
            hex: '#90ee90',
            rgbCSS: 'rgb(144, 238, 144)',
            rgb: [144, 238, 144],
            hslCss: 'hsl(120, 73.4%, 74.9%)',
        },
        lightgrey: {
            name: 'lightgrey',
            hex: '#d3d3d3',
            rgbCSS: 'rgb(211, 211, 211)',
            rgb: [211, 211, 211],
            hslCss: 'hsl(0, 0%, 82.7%)',
        },
        lightpink: {
            name: 'lightpink',
            hex: '#ffb6c1',
            rgbCSS: 'rgb(255, 182, 193)',
            rgb: [255, 182, 193],
            hslCss: 'hsl(351, 100%, 85.7%)',
        },
        lightsalmon: {
            name: 'lightsalmon',
            hex: '#ffa07a',
            rgbCSS: 'rgb(255, 160, 122)',
            rgb: [255, 160, 122],
            hslCss: 'hsl(17, 100%, 73.9%)',
        },
        lightseagreen: {
            name: 'lightseagreen',
            hex: '#20b2aa',
            rgbCSS: 'rgb(32, 178, 170)',
            rgb: [32, 178, 170],
            hslCss: 'hsl(177, 69.5%, 41.2%)',
        },
        lightskyblue: {
            name: 'lightskyblue',
            hex: '#87cefa',
            rgbCSS: 'rgb(135, 206, 250)',
            rgb: [135, 206, 250],
            hslCss: 'hsl(203, 92%, 75.5%)',
        },
        lightslategray: {
            name: 'lightslategray',
            hex: '#778899',
            rgbCSS: 'rgb(119, 136, 153)',
            rgb: [119, 136, 153],
            hslCss: 'hsl(210, 14.3%, 53.3%)',
        },
        lightslategrey: {
            name: 'lightslategrey',
            hex: '#778899',
            rgbCSS: 'rgb(119, 136, 153)',
            rgb: [119, 136, 153],
            hslCss: 'hsl(210, 14.3%, 53.3%)',
        },
        lightsteelblue: {
            name: 'lightsteelblue',
            hex: '#b0c4de',
            rgbCSS: 'rgb(176, 196, 222)',
            rgb: [176, 196, 222],
            hslCss: 'hsl(214, 41.1%, 78%)',
        },
        lightyellow: {
            name: 'lightyellow',
            hex: '#ffffe0',
            rgbCSS: 'rgb(255, 255, 224)',
            rgb: [255, 255, 224],
            hslCss: 'hsl(60, 100%, 93.9%)',
        },
        lime: {
            name: 'lime',
            hex: '#00ff00',
            rgbCSS: 'rgb(0, 255, 0)',
            rgb: [0, 255, 0],
            hslCss: 'hsl(120, 100%, 50%)',
        },
        limegreen: {
            name: 'limegreen',
            hex: '#32cd32',
            rgbCSS: 'rgb(50, 205, 50)',
            rgb: [50, 205, 50],
            hslCss: 'hsl(120, 60.8%, 50%)',
        },
        linen: {
            name: 'linen',
            hex: '#faf0e6',
            rgbCSS: 'rgb(250, 240, 230)',
            rgb: [250, 240, 230],
            hslCss: 'hsl(30, 66.7%, 94.1%)',
        },
        magenta: {
            name: 'magenta',
            hex: '#ff00ff',
            rgbCSS: 'rgb(255, 0, 255)',
            rgb: [255, 0, 255],
            hslCss: 'hsl(300, 100%, 50%)',
        },
        maroon: {
            name: 'maroon',
            hex: '#800000',
            rgbCSS: 'rgb(128, 0, 0)',
            rgb: [128, 0, 0],
            hslCss: 'hsl(0, 100%, 25.1%)',
        },
        mediumaquamarine: {
            name: 'mediumaquamarine',
            hex: '#66cdaa',
            rgbCSS: 'rgb(102, 205, 170)',
            rgb: [102, 205, 170],
            hslCss: 'hsl(160, 50.7%, 60.2%)',
        },
        mediumblue: {
            name: 'mediumblue',
            hex: '#0000cd',
            rgbCSS: 'rgb(0, 0, 205)',
            rgb: [0, 0, 205],
            hslCss: 'hsl(240, 100%, 40.2%)',
        },
        mediumorchid: {
            name: 'mediumorchid',
            hex: '#ba55d3',
            rgbCSS: 'rgb(186, 85, 211)',
            rgb: [186, 85, 211],
            hslCss: 'hsl(288, 58.9%, 58%)',
        },
        mediumpurple: {
            name: 'mediumpurple',
            hex: '#9370db',
            rgbCSS: 'rgb(147, 112, 219)',
            rgb: [147, 112, 219],
            hslCss: 'hsl(260, 59.8%, 64.9%)',
        },
        mediumseagreen: {
            name: 'mediumseagreen',
            hex: '#3cb371',
            rgbCSS: 'rgb(60, 179, 113)',
            rgb: [60, 179, 113],
            hslCss: 'hsl(147, 49.8%, 46.9%)',
        },
        mediumslateblue: {
            name: 'mediumslateblue',
            hex: '#7b68ee',
            rgbCSS: 'rgb(123, 104, 238)',
            rgb: [123, 104, 238],
            hslCss: 'hsl(249, 79.8%, 67.1%)',
        },
        mediumspringgreen: {
            name: 'mediumspringgreen',
            hex: '#00fa9a',
            rgbCSS: 'rgb(0, 250, 154)',
            rgb: [0, 250, 154],
            hslCss: 'hsl(157, 100%, 49%)',
        },
        mediumturquoise: {
            name: 'mediumturquoise',
            hex: '#48d1cc',
            rgbCSS: 'rgb(72, 209, 204)',
            rgb: [72, 209, 204],
            hslCss: 'hsl(178, 59.8%, 55.1%)',
        },
        mediumvioletred: {
            name: 'mediumvioletred',
            hex: '#c71585',
            rgbCSS: 'rgb(199, 21, 133)',
            rgb: [199, 21, 133],
            hslCss: 'hsl(322, 80.9%, 43.1%)',
        },
        midnightblue: {
            name: 'midnightblue',
            hex: '#191970',
            rgbCSS: 'rgb(25, 25, 112)',
            rgb: [25, 25, 112],
            hslCss: 'hsl(240, 63.5%, 26.9%)',
        },
        mintcream: {
            name: 'mintcream',
            hex: '#f5fffa',
            rgbCSS: 'rgb(245, 255, 250)',
            rgb: [245, 255, 250],
            hslCss: 'hsl(150, 100%, 98%)',
        },
        mistyrose: {
            name: 'mistyrose',
            hex: '#ffe4e1',
            rgbCSS: 'rgb(255, 228, 225)',
            rgb: [255, 228, 225],
            hslCss: 'hsl(6, 100%, 94.1%)',
        },
        moccasin: {
            name: 'moccasin',
            hex: '#ffe4b5',
            rgbCSS: 'rgb(255, 228, 181)',
            rgb: [255, 228, 181],
            hslCss: 'hsl(38, 100%, 85.5%)',
        },
        navajowhite: {
            name: 'navajowhite',
            hex: '#ffdead',
            rgbCSS: 'rgb(255, 222, 173)',
            rgb: [255, 222, 173],
            hslCss: 'hsl(36, 100%, 83.9%)',
        },
        navy: {
            name: 'navy',
            hex: '#000080',
            rgbCSS: 'rgb(0, 0, 128)',
            rgb: [0, 0, 128],
            hslCss: 'hsl(240, 100%, 25.1%)',
        },
        oldlace: {
            name: 'oldlace',
            hex: '#fdf5e6',
            rgbCSS: 'rgb(253, 245, 230)',
            rgb: [253, 245, 230],
            hslCss: 'hsl(39, 85.2%, 94.7%)',
        },
        olive: {
            name: 'olive',
            hex: '#808000',
            rgbCSS: 'rgb(128, 128, 0)',
            rgb: [128, 128, 0],
            hslCss: 'hsl(60, 100%, 25.1%)',
        },
        olivedrab: {
            name: 'olivedrab',
            hex: '#6b8e23',
            rgbCSS: 'rgb(107, 142, 35)',
            rgb: [107, 142, 35],
            hslCss: 'hsl(80, 60.5%, 34.7%)',
        },
        orange: {
            name: 'orange',
            hex: '#ffa500',
            rgbCSS: 'rgb(255, 165, 0)',
            rgb: [255, 165, 0],
            hslCss: 'hsl(39, 100%, 50%)',
        },
        orangered: {
            name: 'orangered',
            hex: '#ff4500',
            rgbCSS: 'rgb(255, 69, 0)',
            rgb: [255, 69, 0],
            hslCss: 'hsl(16, 100%, 50%)',
        },
        orchid: {
            name: 'orchid',
            hex: '#da70d6',
            rgbCSS: 'rgb(218, 112, 214)',
            rgb: [218, 112, 214],
            hslCss: 'hsl(302, 58.9%, 64.7%)',
        },
        palegoldenrod: {
            name: 'palegoldenrod',
            hex: '#eee8aa',
            rgbCSS: 'rgb(238, 232, 170)',
            rgb: [238, 232, 170],
            hslCss: 'hsl(55, 66.7%, 80%)',
        },
        palegreen: {
            name: 'palegreen',
            hex: '#98fb98',
            rgbCSS: 'rgb(152, 251, 152)',
            rgb: [152, 251, 152],
            hslCss: 'hsl(120, 92.5%, 79%)',
        },
        paleturquoise: {
            name: 'paleturquoise',
            hex: '#afeeee',
            rgbCSS: 'rgb(175, 238, 238)',
            rgb: [175, 238, 238],
            hslCss: 'hsl(180, 64.9%, 81%)',
        },
        palevioletred: {
            name: 'palevioletred',
            hex: '#db7093',
            rgbCSS: 'rgb(219, 112, 147)',
            rgb: [219, 112, 147],
            hslCss: 'hsl(340, 59.8%, 64.9%)',
        },
        papayawhip: {
            name: 'papayawhip',
            hex: '#ffefd5',
            rgbCSS: 'rgb(255, 239, 213)',
            rgb: [255, 239, 213],
            hslCss: 'hsl(37, 100%, 91.8%)',
        },
        peachpuff: {
            name: 'peachpuff',
            hex: '#ffdab9',
            rgbCSS: 'rgb(255, 218, 185)',
            rgb: [255, 218, 185],
            hslCss: 'hsl(28, 100%, 86.3%)',
        },
        peru: {
            name: 'peru',
            hex: '#cd853f',
            rgbCSS: 'rgb(205, 133, 63)',
            rgb: [205, 133, 63],
            hslCss: 'hsl(30, 58.7%, 52.5%)',
        },
        pink: {
            name: 'pink',
            hex: '#ffc0cb',
            rgbCSS: 'rgb(255, 192, 203)',
            rgb: [255, 192, 203],
            hslCss: 'hsl(350, 100%, 87.6%)',
        },
        plum: {
            name: 'plum',
            hex: '#dda0dd',
            rgbCSS: 'rgb(221, 160, 221)',
            rgb: [221, 160, 221],
            hslCss: 'hsl(300, 47.3%, 74.7%)',
        },
        powderblue: {
            name: 'powderblue',
            hex: '#b0e0e6',
            rgbCSS: 'rgb(176, 224, 230)',
            rgb: [176, 224, 230],
            hslCss: 'hsl(187, 51.9%, 79.6%)',
        },
        purple: {
            name: 'purple',
            hex: '#800080',
            rgbCSS: 'rgb(128, 0, 128)',
            rgb: [128, 0, 128],
            hslCss: 'hsl(300, 100%, 25.1%)',
        },
        rebeccapurple: {
            name: 'rebeccapurple',
            hex: '#663399',
            rgbCSS: 'rgb(102, 51, 153)',
            rgb: [102, 51, 153],
            hslCss: 'hsl(270, 50%, 40%)',
        },
        red: {
            name: 'red',
            hex: '#ff0000',
            rgbCSS: 'rgb(255, 0, 0)',
            rgb: [255, 0, 0],
            hslCss: 'hsl(0, 100%, 50%)',
        },
        rosybrown: {
            name: 'rosybrown',
            hex: '#bc8f8f',
            rgbCSS: 'rgb(188, 143, 143)',
            rgb: [188, 143, 143],
            hslCss: 'hsl(0, 25.1%, 64.9%)',
        },
        royalblue: {
            name: 'royalblue',
            hex: '#4169e1',
            rgbCSS: 'rgb(65, 105, 225)',
            rgb: [65, 105, 225],
            hslCss: 'hsl(225, 72.7%, 56.9%)',
        },
        saddlebrown: {
            name: 'saddlebrown',
            hex: '#8b4513',
            rgbCSS: 'rgb(139, 69, 19)',
            rgb: [139, 69, 19],
            hslCss: 'hsl(25, 75.9%, 31%)',
        },
        salmon: {
            name: 'salmon',
            hex: '#fa8072',
            rgbCSS: 'rgb(250, 128, 114)',
            rgb: [250, 128, 114],
            hslCss: 'hsl(6, 93.2%, 71.4%)',
        },
        sandybrown: {
            name: 'sandybrown',
            hex: '#f4a460',
            rgbCSS: 'rgb(244, 164, 96)',
            rgb: [244, 164, 96],
            hslCss: 'hsl(28, 87.1%, 66.7%)',
        },
        seagreen: {
            name: 'seagreen',
            hex: '#2e8b57',
            rgbCSS: 'rgb(46, 139, 87)',
            rgb: [46, 139, 87],
            hslCss: 'hsl(146, 50.3%, 36.3%)',
        },
        seashell: {
            name: 'seashell',
            hex: '#fff5ee',
            rgbCSS: 'rgb(255, 245, 238)',
            rgb: [255, 245, 238],
            hslCss: 'hsl(25, 100%, 96.7%)',
        },
        sienna: {
            name: 'sienna',
            hex: '#a0522d',
            rgbCSS: 'rgb(160, 82, 45)',
            rgb: [160, 82, 45],
            hslCss: 'hsl(19, 56.1%, 40.2%)',
        },
        silver: {
            name: 'silver',
            hex: '#c0c0c0',
            rgbCSS: 'rgb(192, 192, 192)',
            rgb: [192, 192, 192],
            hslCss: 'hsl(0, 0%, 75.3%)',
        },
        skyblue: {
            name: 'skyblue',
            hex: '#87ceeb',
            rgbCSS: 'rgb(135, 206, 235)',
            rgb: [135, 206, 235],
            hslCss: 'hsl(197, 71.4%, 72.5%)',
        },
        slateblue: {
            name: 'slateblue',
            hex: '#6a5acd',
            rgbCSS: 'rgb(106, 90, 205)',
            rgb: [106, 90, 205],
            hslCss: 'hsl(248, 53.5%, 57.8%)',
        },
        slategray: {
            name: 'slategray',
            hex: '#708090',
            rgbCSS: 'rgb(112, 128, 144)',
            rgb: [112, 128, 144],
            hslCss: 'hsl(210, 12.6%, 50.2%)',
        },
        slategrey: {
            name: 'slategrey',
            hex: '#708090',
            rgbCSS: 'rgb(112, 128, 144)',
            rgb: [112, 128, 144],
            hslCss: 'hsl(210, 12.6%, 50.2%)',
        },
        snow: {
            name: 'snow',
            hex: '#fffafa',
            rgbCSS: 'rgb(255, 250, 250)',
            rgb: [255, 250, 250],
            hslCss: 'hsl(0, 100%, 99%)',
        },
        springgreen: {
            name: 'springgreen',
            hex: '#00ff7f',
            rgbCSS: 'rgb(0, 255, 127)',
            rgb: [0, 255, 127],
            hslCss: 'hsl(150, 100%, 50%)',
        },
        steelblue: {
            name: 'steelblue',
            hex: '#4682b4',
            rgbCSS: 'rgb(70, 130, 180)',
            rgb: [70, 130, 180],
            hslCss: 'hsl(207, 44%, 49%)',
        },
        tan: {
            name: 'tan',
            hex: '#d2b48c',
            rgbCSS: 'rgb(210, 180, 140)',
            rgb: [210, 180, 140],
            hslCss: 'hsl(34, 43.7%, 68.6%)',
        },
        teal: {
            name: 'teal',
            hex: '#008080',
            rgbCSS: 'rgb(0, 128, 128)',
            rgb: [0, 128, 128],
            hslCss: 'hsl(180, 100%, 25.1%)',
        },
        thistle: {
            name: 'thistle',
            hex: '#d8bfd8',
            rgbCSS: 'rgb(216, 191, 216)',
            rgb: [216, 191, 216],
            hslCss: 'hsl(300, 24.3%, 79.8%)',
        },
        tomato: {
            name: 'tomato',
            hex: '#ff6347',
            rgbCSS: 'rgb(255, 99, 71)',
            rgb: [255, 99, 71],
            hslCss: 'hsl(9, 100%, 63.9%)',
        },
        turquoise: {
            name: 'turquoise',
            hex: '#40e0d0',
            rgbCSS: 'rgb(64, 224, 208)',
            rgb: [64, 224, 208],
            hslCss: 'hsl(174, 72.1%, 56.5%)',
        },
        violet: {
            name: 'violet',
            hex: '#ee82ee',
            rgbCSS: 'rgb(238, 130, 238)',
            rgb: [238, 130, 238],
            hslCss: 'hsl(300, 76.1%, 72.2%)',
        },
        wheat: {
            name: 'wheat',
            hex: '#f5deb3',
            rgbCSS: 'rgb(245, 222, 179)',
            rgb: [245, 222, 179],
            hslCss: 'hsl(39, 76.7%, 83.1%)',
        },
        white: {
            name: 'white',
            hex: '#ffffff',
            rgbCSS: 'rgb(255, 255, 255)',
            rgb: [255, 255, 255],
            hslCss: 'hsl(0, 0%, 100%)',
        },
        whitesmoke: {
            name: 'whitesmoke',
            hex: '#f5f5f5',
            rgbCSS: 'rgb(245, 245, 245)',
            rgb: [245, 245, 245],
            hslCss: 'hsl(0, 0%, 96.1%)',
        },
        yellow: {
            name: 'yellow',
            hex: '#ffff00',
            rgbCSS: 'rgb(255, 255, 0)',
            rgb: [255, 255, 0],
            hslCss: 'hsl(60, 100%, 50%)',
        },
        yellowgreen: {
            name: 'yellowgreen',
            hex: '#9acd32',
            rgbCSS: 'rgb(154, 205, 50)',
            rgb: [154, 205, 50],
            hslCss: 'hsl(80, 60.8%, 50%)',
        },
    },

    rotate: (
        r: number,
        g: number,
        b: number,
        vMin: number = 0,
        vMax: number = 255,
        sMin: number = 0,
        hBase: number
    ): Array<number> => {
        // get v
        let h = hBase / 60,
            s = sMin,
            v = Math.max(r, g, b);

        // rotate value
        v += 1;
        if (v > vMax) v = vMin;
        else if (v < vMin) v = vMax;

        // back to rgb
        if (s === 0) {
            return [v, v, v];
        } else {
            const i = h << 0;
            const f = h - i;
            const p = v * (1 - s);
            const q = v * (1 - s * f);
            const t = v * (1 - s * (1 - f));

            switch (i) {
                case 0:
                    return [v, t, p];
                case 1:
                    return [q, v, p];
                case 2:
                    return [p, v, t];
                case 3:
                    return [p, q, v];
                case 4:
                    return [t, p, v];
                case 5:
                default:
                    return [v, p, q];
            }
        }
    },
    rgbToHsv: (r: number, g: number, b: number): Array<number> => {
        const maxRGB: number = Math.max(r, g, b);
        const minRGB: number = Math.min(r, g, b);

        const delta = maxRGB - minRGB;
        let h = 0,
            s = 0,
            v = maxRGB / 255;

        if (maxRGB !== 0 && delta !== 0) {
            s = delta / maxRGB;
            if (r === maxRGB) h = (g - b) / delta;
            if (g === maxRGB) h = 2 + (b - r) / delta;
            if (b === maxRGB) h = 4 + (r - g) / delta;
            h *= 60;
            if (h < 0) h += 360;
        }
        return [h, s, v];
    },
    hsvToRgb: (h: number, s: number, v: number): Array<number> => {
        v *= 255;
        if (s === 0) {
            return [v, v, v];
        } else {
            if (h === 360) h = 0;
            if (h > 360) h -= 360;
            if (h < 0) h += 360;
            h /= 60;

            const i = h << 0;
            const f = h - i;
            const p = v * (1 - s);
            const q = v * (1 - s * f);
            const t = v * (1 - s * (1 - f));

            switch (i) {
                case 0:
                    return [v, t, p];
                case 1:
                    return [q, v, p];
                case 2:
                    return [p, v, t];
                case 3:
                    return [p, q, v];
                case 4:
                    return [t, p, v];
                case 5:
                default:
                    return [v, p, q];
            }
        }
    },
    hsvCss: (h: number, s: number, v: number): string => {
        let r, g, b;
        [r, g, b] = color.hsvToRgb(h, s, v);
        return `rgb(${r << 0}, ${g << 0}, ${b << 0})`;
    },
};
