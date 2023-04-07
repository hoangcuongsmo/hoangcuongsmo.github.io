window.addEventListener('DOMContentLoaded', function(e) {
    // sg is Seasions Greetings
    const seasonsPathsIds = [
        { id: "Path_167-2_11_", time: 4, transformX: 70, transformY: 20, transformTime: 1},
        { id: "Path_168-2_11_", time: 1, transformX: -20 , transformY: 20, transformTime: 2},
        { id: "Path_169-2_11_", time: 4, transformX: -150 , transformY: 20, transformTime: 1},
        { id: "Path_170-2_11_", time: 0.1, transformX: -80 , transformY: 50, transformTime: 1},
    ];
    const greetingPathIds = [
        { id: "Path_172-2_11_", time: 2, transformX: 20 , transformY: -100, transformTime: 1},
        { id: "Path_173-2_11_", time: 1, transformX: 20 , transformY: -100, transformTime: 1},
        { id: "Path_174-2_11_", time: 2, transformX: -20 , transformY: -150, transformTime: 1},
        { id: "Path_181-2_11_", time: 2, transformX: -150 , transformY: -100, transformTime: 1},
        { id: "Path_177-2_11_", time: 2, transformX: -150 , transformY: -100, transformTime: 1},
        { id: "Path_185-2_11_", time: 0.3, transformX: -150 , transformY: -100, transformTime: 1},
        { id: "Path_178-2_11_", time: 2, transformX: -180 , transformY: -100, transformTime: 1},
    ];
    const sgOutPaths = [
        { id: "Path_175-2_11_"},
        { id: "Path_171-2_11_"},
        { id: "Path_176-2_11_"},
        { id: "Path_179-2_11_"},
        { id: "Path_180-2_11_"},
        { id: "Path_182-2_11_"},
        { id: "Path_183-2_11_"},
        { id: "Path_184-2_11_"},
        { id: "Path_187-2_11_"},
        { id: "Path_186-2_11_"}
    ];
    const snowDonutPathArr = [
        [187,58,272,143,105,290,527,101],
        [362,407,646,1025,1024,313,358,470,938,939,942,830,485,808,779,894],
        [80,501,35,781,93,2,408,62,325,341,391],
        [5,566,321,334,862,79,666,395,91,490],
        [63,623,177,396,601,458,139, 96],
        [914,215,440,845,799,846,797,137,246],
        [12,119,31,18,827,622,689,278,788,577,557],
        [390,284,88,836,881,823,932,293,328,1027,1026,618,691,807,929],
        [711,665,494,545,575,266],
        [233,604,824,853,677,820,725,75,822,389,21,294,729,1032,1033],
        [24,442,323,525,951,763,732,890,576,484,510,249,447,660,755,794],
        [922,735,350,130,919,920,641,431,627,81],
        [504,1035,1034,13,730,297,561,414,571,433],
        [915,126,269,896,892,451,352,147,17,502,308,917],
        [82,3,273,849,679,151,281,698],
        [923,918,776,486,573,160,495,543,961,955],
        [673,921,270,916,214,135,773,636,1001,329,774,154,508,826,974,973,825,654,979,298],
        [285,304,112,1028,1029,383,607,514,360],
        [288,499,194,692,142,753,314,330,855,335],
        [719,565,211,319,312,733,867],
        [100,73,234,98,238,724,609,819,59,463,906,905,685],
        [865,83,371,498,676,370,149],
        [157,645,833,140,107,345,144,487,393,23],
        [301,239,405,519,768,669,876,274,664,41,283,192,708,700,286],
        [280,337,182,436,148,488],
        [331,870,43,761,315,318,631,106,38],
        [20,816,114,874,875,602,372],
        [743,222,821,770,756,901,296,450,375,176,14],
        [506,1017,1016,305,94,475,716,706,336,351,744,988,42],
        [740,343,528,348,972,480],
        [40,8,34,615,287,595,701],
        [33,403,387],
        [277,831,850,424,592,694,651],
        [521,316,1030,1031,61,559,457],
        [26,780,790,886,786,888,551,728,69,203,251,992,912],
        [841,356,900,977,164,594,657,777,812,548,567,459],
        [613,152,420,526,1006,625,941,368,838,258],
        [178,52,640,275,171],
        [943,668,299,218,16,419,624,517,765,590],
        [19,227,986,250,253,599,806,851,804,705,338,136,598],
        [153,376,473,410,454,882,871,927],
        [723,895,741,117,959,950,445],
        [162,291,530,574,630],
        [65,1004,418,872,712,1014,1015,505],
        [37,45,642,467,156],
        [718,121,647,648,36,423,134],
        [7,57,471,198,216],
        [762,884,339,244,803,55,547,448,247,750],
        [581,963,954,962,736,357],
        [255,544,585,386,558,554,102],
        [429,11,813,564,404,225,254,792,863],
        [628,639,621,236,123,155,707,847,764,980,769,856,726],
        [385,128,481,452],
        [509,652,893,415,759,259,491,579,109],
        [76,104,529,138,185,47],
        [366,124,322,984,994,546,150,163,834,976],
        [377,572,644,754,795,210],
        [589,0,523,302,48,832,146,887,828,202,303,944,438],
        [365,582,751,541],
        [611,354,540,441,671,200],
        [359,264,346],
        [503,460,108,908,866,363,690,307],
        [30,606,553,793,693,466,27,230,44,243,981,586,580,378,772],
        [469,369,680,563,949,400,39,1012,1013,675],
        [479,282,111,87,320],
        [752,324,54,699,120,766,993,839,899,161,1002,468],
        [209,226,444,180,110,659,68,658,25,638],
        [355,512,306,347,409,435,46,771],
        [413,513,562,953,837,173,86,678],
        [204,656,958,957,720,999,997,996,995,1011,1010,760],
        [717,439,520,533,95,392,552],
        [493,279,224,267,382,549],
        [417,205,603,133,381],
        [193,897,854,129,159,745],
        [84,241,662,49,616,125,289],
        [276,67,704,967,425,715,667, 4],
        [1009,1008,231,784,810,802,51,141,179],
        [364,809,516,608,612,461,228],
        [60,767,610,757,184,722,427],
        [696,474,1005,650,353,166,785,864,115,240,340,626,783,879],
        [550,237,634,791,260,695,727,789,860],
        [29,199,189,399,221,398,844,537],
        [496,472,191,172,684,295,271],
        [904,597,883,857,731,739,327,848,843,292,880,394,858],
        [326,50,309,89,536,937,66],
        [183,477,256,775,877,588,446,930,220],
        [811,538,342,462,384,268,539,235,787,805,878,170,702],
        [782,742,397,859,909,911,910,818,738,379,421],
        [92,635,643,261,721,703,476],
        [145,758,605,99,430],
        [587,449,593,682,317,674],
        [229,402,207,158,801,206,456],
        [688,64,683,1018,1019,53,333,535,28],
        [661,478,629,873,344,614,175,985,584,902],
        [672,426,22,815,500,889,975,248],
        [522,649,903,907,195,113,388,964,968,617,869,952],
        [687,252,1,10,633,686,1007,970,835,532],
        [714,653,131,991,219,443,97,531,74,852,868,936],
        [77,1020,1021,709,437,556,570],
        [56,174,428,165,367,196,620, 6],
        [483,217,663,401,507,583,940,861],
        [432,637,464,465,85,434,197,670],
        [814,412,497,569,263,265,422,132,542,489],
        [90,749,511,262,70,482],
        [1022,1023,72,596,947,453,300,913,925,578,257,122,591,560],
        [15,245,71,710,829,983,169,681,619],
        [242,778,697,118,737,455,208,311,898,945,361,492,181,380,971,933],
        [232,190,212,796,798,515,373,310,568,349,534,223,842,946,168,518,374,9],
        [127,116,213,201,188,734,411,800,948,960,990],
        [713,524,406,416,978,655,891,632,885],
        [32,555,78,817,746,167,747,600,103,186,748,332]
    ];
    gsap.registerPlugin(MotionPathPlugin);
    function firstScreen() {
        var firstScreenTL = gsap.timeline();
        firstScreenTL.to(".move-line", {
            y: '-50%',
            x: window.innerWidth * 2,
            duration: 1,
            ease: 'none',
            onComplete: function() {
                document.querySelector('.move-line').classList.add('animation-done');
            }
        })
        .to('.star-click', {
            opacity: 1,
            duration: 1,
            top: '45%',
            delay: 1
        }).fromTo('.star-click img', 
            { opacity: 0.6}, 
            { opacity: 1, yoyo: true, repeat: -1, repeatDelay: 0, duration: 2, delay: 1}
        );
    }

    function firstSetup() {

        const zimmerLogo = document.querySelector("#logo"),
        zimmerLogoBound = zimmerLogo.getBoundingClientRect(),
        zimmerLogoTop = window.innerHeight / 2 - zimmerLogo.getBoundingClientRect().height / 2,
        zimmerLogoFake = document.querySelector(".zimmer-logo__fake");
        zimmerLogoFake.style.cssText = `width: ${zimmerLogoBound.width}px; height: ${zimmerLogoBound.height}px`;

        let logoStroke = document.querySelector('.zimmer-stroke');
        logoStroke.style.strokeDasharray = Math.floor(logoStroke.getTotalLength());
        logoStroke.style.strokeDashoffset = Math.floor(logoStroke.getTotalLength());

        sgOutPaths.forEach((hiddenItem) => {
            const hiddenPath = document.querySelector(`#${hiddenItem.id}`);
            gsap.to(`#${hiddenItem.id}`, {
                strokeDashoffset: Math.floor(hiddenPath.getTotalLength()),
                strokeDasharray: Math.floor(hiddenPath.getTotalLength()),
                opacity: 0
            });


        }); 

        seasonsPathsIds.forEach((item, index) => {
            const path = document.querySelector(`#${item.id}`);
            path.style.strokeDasharray = path.getTotalLength();
            path.style.strokeDashoffset = path.getTotalLength();
            if(index > 0) {
                path.style.opacity = 0;
            }
        })

        greetingPathIds.forEach(item => {
            const path = document.querySelector(`#${item.id}`);
            path.style.strokeDasharray = path.getTotalLength();
            path.style.strokeDashoffset = path.getTotalLength();
            path.style.opacity = 0;
        });

        document.querySelector('.season-greeting').style.transform = 'translate(70%, 50%) scale(4)';

    }


    const startClick = document.querySelector(".star-click");
    startClick.addEventListener("click", function(e) {
        e.preventDefault();
        if(this.classList.contains('hidden')) return;
        run();
    });

    function is_firefox() {
        return navigator.userAgent.match(/firefox/i);
    }
    function is_safari() {
        return navigator.userAgent.match(/safari/i) && (navigator.userAgent.match(/Macintosh/i) || navigator.userAgent.match(/iPhone/i));
    }

    if(is_safari()) {
        console.log('Apple')
    }

    function defaultStyle() {

        var snowCircleContainerX = 2.65;
        if(window.innerWidth < 600) {
            snowCircleContainerX = 2.9;
        }
        if (is_firefox()) {
            document.body.className += " firefox";
        }
        if(is_safari()) {
            document.body.className += " safari";
        }
        const snowCircleContainer = document.querySelector('.snow-circle-container'),
        ssgrContainer = document.querySelector('.ssgr-container'),
        zLogo = document.getElementById('logo'),
        zLogoContainer = document.querySelector('.logo-container');

        snowCircleContainer.style.width = `${zLogo.getBoundingClientRect().width}px`;
        if(window.innerWidth > 768) {
            snowCircleContainer.querySelector('#snow-circle').style.width = `${zLogoContainer.offsetWidth * snowCircleContainerX}px`;
        } else {
            snowCircleContainer.querySelector('#snow-circle').style.width = `${zLogoContainer.offsetWidth + 150}px`;
        }

        ssgrContainer.style.width = `${zLogo.getBoundingClientRect().width * 1.1}px`

    }
    function zimmerStrokeAnimate() {

        gsap.to('.season-greeting', {
            x: '45%',
            y: '20%',
            scale: 3,
            duration: 1,
            onComplete: function() {
                gsap.set('.season-greeting', {scale: 3});
                gsap.to('#season-greeting', {
                    opacity: 0,
                    duration: 1,
                    onComplete: function() {
                        zimmerStrokeAnimateInner()
                    }
                });

            }
        });
    }


    function zimmerStrokeAnimateInner() {
        const logoStroke = document.querySelector('.zimmer-stroke');

        const logoPoints = [
            { x: 45, y: 55, duration: 0.5, delay: 0.5 },
            { x: -170, y: 55, duration: 0.8, delay: 1 },
            { x: -80, y: -120, duration: 1, delay: 1.8 },
            { x: -170, y: -90, duration: 1, delay: 2.8 },
            { x: -170, y: -120, duration: 0.5, delay: 3.3 },
            { x: 45, y: -120, duration: 1, delay: 3.8 },
            { x: 0, y: 0, duration: 1, delay: 4.8 },
        ];


        logoPoints.forEach((point, index) => {
            gsap.to('.season-greeting', {
                x: `${point.x}%`,
                y: `${point.y}%`,
                ease: 'none',
                scale: 3,
                duration: point.duration,
                delay: point.delay,
                onComplete: function() {
                    if(index >= logoPoints.length - 1) {
                        gsap.to('.season-greeting', {
                            x: '-50%',
                            y: '-50%',
                            scale: 1,
                            delay: 1,
                        });
                    }
                }
            });
        });

        const logoStrokeDuration = 6, logoStrokeDelay = 1;

        gsap.to('#logo-spark', { opacity: 1, duration: 1});
        gsap.set('.zimmer-stroke', { opacity: 1});
        gsap.fromTo('.zimmer-stroke', 
            { strokeDashoffset: logoStroke.getTotalLength() },
            {
                strokeDashoffset: 0,
                duration: logoStrokeDuration,
                delay: logoStrokeDelay,
                ease: "none",
                delay: 0.5,
                onComplete: function() {
                    gsap.to('#zimmer-logo', {
                        opacity: 1,
                        duration: 0.5,
                        onComplete: function() {
                            setTimeout(() => {
                                snowCircleZoomIn()
                            }, 1000);
                        }
                    });
                }
            }
        );

        const logoSmallSize = { width: 200, height: 200 };

        gsap.to("#logo-spark", {
            motionPath: {
                path: `.zimmer-stroke`,
                align: `.zimmer-stroke`,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
            duration: logoStrokeDuration,
            ease: "none",
            delay: logoStrokeDelay,
            delay: 0.5,
        });
    }

    function ssgrMove(points, delay = 0) {
        var ssgrScale = 4;
        if(window.innerWidth < 1025) {
            ssgrScale =  6;
        }
        if(window.innerWidth < 768) {
            ssgrScale = 6;
        }
        const force3D = is_safari() ? false : true;
        points.forEach(function(item, index) {
            gsap.to('.season-greeting', {
                x: `${item.x}%`,
                y: `${item.y}%`,
                z: 0,
                scale: ssgrScale,
                duration: item.animationTime,
                ease: "none",
                delay: delay,
            });
            delay += item.time;
        });        
    }

    
    var ssMoves = [
        { x: 70, y: 20, time: 4, animationTime: 1 },
        { x: 20, y: 20, time: 1, animationTime: 1 },
        { x: -20, y: 20, time: 1, animationTime: 1 },
        { x: -80, y: 20, time: 1, animationTime: 1 },
        { x: -150, y: 20, time: 1, animationTime: 1 },
        { x: -80, y: 50, time: 1, animationTime: 1 },
    ];
    if(window.innerWidth < 1025) {
        ssMoves = [
            { x: 80, y: 30, time: 2, animationTime: 1 },
            { x: 120, y: 30, time: 2, animationTime: 1 },
            { x: -20, y: 30, time: 1, animationTime: 1 },
            { x: -80, y: 30, time: 2, animationTime: 1 },
            { x: -250, y: 30, time: 2, animationTime: 1 },
            { x: -80, y: 50, time: 1, animationTime: 1 }
        ];
    }
    function seasonsDraw() {
        ssgrMove(ssMoves);
        seasonsPathsIds.forEach((item, index) => {
            const path = document.querySelector(`#${item.id}`);
            var delay = 0;
            if(index > 0) {
                for(var i = 0; i < index; i++) {
                    delay += seasonsPathsIds[i].time;
                }
                gsap.to(`#${item.id}`, {
                    opacity: 1,
                    delay: delay,
                    duration: 0
                });
            } else {
                gsap.to(`#${item.id}`, {
                    delay: delay,
                    duration: 0
                });
            }

            gsap.fromTo(`#${item.id}`, 
                {strokeDashoffset: path.getTotalLength()}, 
                {
                    strokeDashoffset: 0, 
                    duration: item.time ,
                    ease: "none",
                    delay: delay,
                    force3D: true
                },
            );
            var zInScale = 1.5;
            var ssgrScale = 4,
                transfer = { x: '70%', y: '-120%'};
                
            if(window.innerWidth < 1025) {
                zInScale = 1.5;
                ssgrScale = 6;
                transfer = { x: '150%', y: '-120%'}
            }
            gsap.to("#spark", {
                motionPath: {
                    path: `#${item.id}`,
                    align: `#${item.id}`,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                },
                duration: item.time,
                ease: "none",
                delay: delay,
                onComplete: function() {
                    if(index >= seasonsPathsIds.length - 1) {
                        gsap.to('.season-greeting', {
                            x: '-50%',
                            y: '-50%',
                            scale: zInScale,
                            ease: 'none',
                            duration: 1,
                            onComplete: function() {
                                gsap.to('.season-greeting', {
                                    x: transfer.x,
                                    y: transfer.y,
                                    scale: ssgrScale,
                                    ease: 'none',
                                    duration: 1,
                                    onComplete: greetingDraw()
                                });  
                            }
                        });

                        
                    }
                }
            });
            
        });
    }
    var grMoves = [
        { x: 70, y: -120, time: 2, animationTime: 1 },
        { x: -50, y: -120, time: 1, animationTime: 1 },
        { x: -150, y: -200, time: 1, animationTime: 1 },
        { x: -50, y: -200, time: 1, animationTime: 1 },
        { x: -50, y: -50, time: 1, animationTime: 0.5 },
        { x: -100, y: -120, time: 2, animationTime: 1 },
        { x: -180, y: -100, time: 1, animationTime: 1 },
    ];
    if(window.innerWidth < 1025) {
        var grMoves = [
            { x: 50, y: -120, time: 1, animationTime: 1 },
            { x: 20, y: -120, time: 1, animationTime: 1 },
            { x: -200, y: -200, time: 1, animationTime: 1 },
            { x: 20, y: -200, time: 1, animationTime: 1 },
            { x: -100, y: -100, time: 1, animationTime: 1 },
            { x: -150, y: -100, time: 2, animationTime: 1 },
            { x: -240, y: -80, time: 2, animationTime: 1 },
        ];  
    }
    function greetingDraw() {
        ssgrMove(grMoves, 1)
        greetingPathIds.forEach((item, index) => {
            const path = document.querySelector(`#${item.id}`);
            var zInScale = 2;
            if(window.innerWidth > 1024) {
                zInScale = 1;
            }
            var delay = 0;
            if(index > 0) {
                for(var i = 0; i < index; i++) {
                    delay += greetingPathIds[i].time;
                }
            }
            gsap.set(`#${item.id}`, { opacity: 1, delay: delay});
            gsap.fromTo(`#${item.id}`, 
                {strokeDashoffset: path.getTotalLength()}, 
                {
                    strokeDashoffset: 0, 
                    duration: item.time ,
                    ease: "none",
                    delay: delay,
                    force3D: true
                },
            );

            gsap.to("#spark", {
                motionPath: {
                    path: `#${item.id}`,
                    align: `#${item.id}`,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                },
                duration: item.time,
                ease: "none",
                delay: delay,
                onComplete: function() {
                    if(index >= greetingPathIds.length - 1) {
                        sgOutPaths.forEach((hiddenItem, hiddenItemIndex) => {
                            gsap.to(`#${hiddenItem.id}`, {opacity: 1, duration: 1.5, delay: 1, strokeDashoffset: 0});
                            gsap.to('.season-greeting', {
                                x: `-50%`,
                                y: `-50%`,
                                scale: 1.5,
                                duration: 1,
                                ease: "none",
                                onComplete: function() {
                                    if(hiddenItemIndex >= sgOutPaths.length - 1) {
                                        gsap.to('.season-greeting', {
                                            x: `70%`,
                                            y: `50%`,
                                            scale: 2,
                                            duration: 1,
                                            ease: "none",
                                            delay: 1,
                                            onComplete: function() {
                                                setTimeout(() => {
                                                    snowDonut();
                                                    snowDonutPathAnimation();
                                                }, 1000);
                                            }
                                        });
                                    }
                                }
                            });

                        }); 
                    }
                }
            });
            
        });
    }

    const snowdonutPoints = [
        { x: 70, y: 50, duration: 0.25 },
        { x: 100, y: 20, duration: 0.25},
        { x: 120, y: 0, duration: 0.25},
        { x: 140, y: -20, duration: 0.25 },
        { x: 140, y: -40, duration: 0.25 },
        { x: 140, y: -60, duration: 0.25 },
        { x: 120, y: -80, duration: 0.25 },
        { x: 100, y: -120, duration: 0.25},
        { x: 80, y: -140, duration: 0.25},
        { x: 60, y: -160, duration: 0.25},
        { x: 40, y: -180, duration: 0.25},
        { x: 20, y: -200, duration: 0.25},
        { x: 0, y: -210, duration: 0.25},
        { x: -20, y: -220, duration: 0.25},
        { x: -40, y: -220, duration: 0.25},
        { x: -60, y: -220, duration: 0.25},
        { x: -80, y: -220, duration: 0.25},
        { x: -100, y: -210, duration: 0.25},
        { x: -120, y: -200, duration: 0.25},
        { x: -140, y: -180, duration: 0.25},
        { x: -160, y: -160, duration: 0.25},
        { x: -180, y: -140, duration: 0.25},
        { x: -200, y: -120, duration: 0.25},
        { x: -210, y: -100, duration: 0.25},
        { x: -210, y: -80, duration: 0.25},
        { x: -210, y: -60, duration: 0.25},
        { x: -210, y: -40, duration: 0.25},
        { x: -210, y: -20, duration: 0.25},
        { x: -200, y: 0, duration: 0.25},
        { x: -180, y: 20, duration: 0.25},
        { x: -160, y: 40, duration: 0.25},
        { x: -140, y: 60, duration: 0.25},
        { x: -120, y: 80, duration: 0.25},
        { x: -100, y: 100, duration: 0.25},
        { x: -80, y: 120, duration: 0.25},
    ];

    function snowDonut() {
        let snowDelay = 1;
        snowdonutPoints.forEach((item, index) => {
            if(index > 0) {
                snowDelay += (item.duration);
            }
            gsap.set('.season-greeting', {scale: 2});
            gsap.to('.season-greeting', {
                x: `${item.x}%`,
                y: `${item.y}%`,
                duration: item.duration,
                ease: "none",
                delay: snowDelay,
            });
        });
    }


    function snowDonutPathAnimation() {
        let snowdonutPaths = document.querySelectorAll('#a4fe8d41-c939-41c7-b84f-11affc18a62a path');
        let pathDelay = 0;
        snowDonutPathArr.forEach((pathArr, index) => {
            let arr = [];
            pathArr.forEach(item => {
                arr.push(snowdonutPaths[item]);
            }); 

            gsap.to(arr, {
                opacity: 1,
                duration: 2,
                delay: pathDelay,
                ease: "power3.out",
                onStart: function() {
                    if(index >= snowDonutPathArr.length -  1) {
                        gsap.to('.season-greeting', {
                            x: '-50%',
                            y: '-50%',
                            scale: 1,
                            duration: 2,
                            delay: 0,
                            onComplete:  function() {
                                zimmerStrokeAnimate()
                            }
                        })
                    }
                },
            }); 
            pathDelay += 0.09;
        }) 
    }


    document.querySelector('.sound-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if(this.classList.contains('on')) {
            document.querySelector('audio').pause();
        } else {
            document.querySelector('audio').play();
        }
        this.classList.toggle("on");
        if(document.getElementById('audio'))
            document.getElementById('audio').remove();
    });


    const donuts = [
        {
            paths: [276,488,372,701,121,718,717,204,209,661,1007,970,686,587,538,811,342,326,926,472,734,814,412,933,670,714,649,522,903,907,59,330,698,281,308,414,755,729,929,807,618,139,96,808,779,894,485,188,232,560,591,90],
            kill: 2.2
        },
        {
            paths: [7,762,884,357,544,377,589,76,30,553,606,466,693,793,479,752,205,417,603,493,306,226,124,153,65,418,872,1004,255,595,336,351,989,744,988,14,360,314,463,905,906,192,283,700,708,38,602,42,458,566,862,35,781,632,190,212,796,798,515,653,688],
            kill: 2.1
        },
        {
            paths: [122,428,497,56,991,131,687,229,449,92,904,193,854,897,133,279,656,355,469,598,590,148,487,607,502],
            kill: 2.1
        },
        {
            paths: [142,867,733,753,514,961,17,561,794,1033,1032,1027,1026,101,41,393,114,457,459,178,376,258,387,857],
            kill: 2.1
        },
        {
            paths: [474,1005,569,197,50,27,611,366,104,324,819,712,57,471,647,84,67,696,550,191,597,883,26,886,786,888,780,790,912,992],
            kill: 2.1
        },
        {
            paths: [5,380,373,518,201,32,334,6,219,835,248,195,183,782,402,172,731,427,496,462,309,739,29,767,257,749,0,503,322,980,764,385,155,628,707,429,386,585,736,244,339,803,198,648,37,551,728,251,203,52,287,559,480,176,106,335,984,994,460,243,981,369,680,563,949,282,444,],
            kill: 2
        },
        {
            paths: [383,298,543,495,508,825,826,973,974,149,816,20,875,874,972,34,567,136,473,445,871,927,532,478,758,635,89,237,199,722,1008,1009,241,704,267,958,347,413,957,513,512,224,129,180,562,720,439,662,60,843,327,742,145,],
            kill: 1.9
        },
        {
            paths: [495,81,294,691,328,577,557,396,601,321,830,290,527,817,555,374,181,263,631,286,664,144,979,730,147,151,370,23,706,375,348,69,765,410,454,882,117,630,36,847,546,523,359,400,],
            kill: 1.9
        },
        {
            paths: [154,654,692,312,609,345,676,685,94,475,305,716,61,517,338,741,950,959,490,313,358,78,213,971,174,252,384,394,848,858,189,650,634,791,184,809,364,967,123,954,581,558,962,963,639,236,572,108,586,230,],
            kill: 1.9
        },
        {
            paths: [8,525,323,951,293,246,470,411,278,18,622,788,689,79,1024,77,443,113,629,207,593,397,911,859,909,910,292,382,54,264,307,302,354,404,621,55,434,],
            kill: 1.8
        },
        {
            paths: [408,62,143,646,978,655,406,891,116,990,710,982,983,547,225,128,138,579,365,644,150,540,582,908,441,185,109,259,254,928,931,863,792,813,554,448,352,451,571,13,660,442,21,266,93,939,416,942,938,492,578,453,511,265,269,892,896,987,160,774,329,1029,1028,724,238,498,371,107,274,318,403,651,548,838,640,624,419,705,895,574,1015,1014,423,],
            kill: 1.75
        },
        {
            paths: [1020,1021,690,866,751,671,754,832,944,48,491,529,856,769,726,481,452,759,564,11,247,750,642,18,431,627,890,763,732,575,800,948,960,945,455,311,361,300,913,925,85,401,97,873,344,158,643,268,477,536,353,516,610,381,520,995,997,999,998,953,409,110,111,679,849,955,273,573,135,],
            kill: 1.7
        },
        {
            paths: [1025,272,747,746,748,310,568,16,40,770,222,821,450,756,743,901,315,669,519,876,768,98,83,270,447,350,840,822,88,836,823,881,932,250,806,253,804,851,465,464,637,663,217,165,367,456,430,703,170,398,295,115,461,715,125,392,766,120,839,699,899,993,87,378,709,531,617,868,74,175,985,1019,1018,206,99,605,721,446,738,221,785,864,228,425,745,533,231,784,802,810,757,399,682,801,22,614,683,388,964,968,426,815,625,368,260,166,860,789,695,727,684,880,937,775,256,877,934,539,235,787,588,930,805,878,818,261,2,9,177,947,422,132,70,4,10,1020,1021,64,549,159,996,837,173,435,68,659,39,44,580,1035,1034,641,389,31,137,827,666,105,965,208,898,737,15,262,596,583,940,507,861,570,500,889,975,214,773,1001,194,319,234,140,182,436,528,615,1030,1031,164,420,812,777,977,657,594,956,218,291,723,],
            kill: 1.7
        },
        {
            paths: [102,45,12,91,325,623,215,845,846,799,797,395,407,58,167,600,186,332,524,168,842,71,118,349,946,534,72,1023,1022,169,482,681,619,778,242,223,697,127,713,103,885,187,362,80,341,501,391,914,63,390,711,320,675,346,363,200,966,146,828,438,202,303,541,887,210,795,163,47,415,509,652,834,976,893,156,216,134,467,505,141,86,1,19,986,66,53,28,672,3,24,820,677,853,233,604,665,824,284,245,829,542,489,432,483,196,620,556,437,852,936,633,869,952,584,902,317,535,333,421,220,379,702,476,674,271,844,537,626,240,879,340,783,51,141,612,179,608,49,289,667,760,552,678,771,638,25,468,668,171,275,941,152,1006,356,613,900,841,526,943,521,316,277,831,850,343,506,740,296,331,280,337,870,301,645,157,833,969,865,73,100,565,719,855,288,285,916,921,673,918,923,82,917,915,433,504,919,920,924,922,484,249,510,735,130,297,126,776,486,636,304,112,499,211,405,239,761,935,43,1017,1016,33,592,694,299,227,599,162,530,772,1012,1013,161,1002,658,46,1010,1011,95,616,75,576,725,494,545,440,119,424,],
            kill: 1.6
        }
    ];

    const mbKills = [10, 8, 8, 8, 8, 6, 6, 4, 4, 4, 4, 4, 3, 3 , 3, 3, 3, 3, 3];

    function snowCircleZoomIn() {
        let paths = document.querySelectorAll('#a4fe8d41-c939-41c7-b84f-11affc18a62a path')
        const snowCircle = document.querySelector('#snow-circle');
        var logoSmallSize = { width: 200, height: 200 };
        if(window.innerWidth < 768) {
            logoSmallSize = { width: 150, height: 150 };
        }
        donuts.forEach((donut, donutIndex) => {
            donut.paths.forEach((item, index) => {
                const itemPath = paths[item];
                var itemX = ((snowCircle.getBBox().width / 2) - itemPath.getBBox().x - itemPath.getBBox().width / 2);
                var itemY = ((snowCircle.getBBox().height / 2) - itemPath.getBBox().y - itemPath.getBBox().height / 2);
                var killX = (window.innerWidth > 768) ? (itemX / donut.kill) : (itemX / mbKills[donutIndex]);
                var killY = (window.innerWidth > 768) ? (itemY / donut.kill) : (itemY / mbKills[donutIndex]);
                const move = gsap.to(paths[item], {
                    x: killX,
                    y: killY,
                    duration: 5,
                    onComplete: function() {
                        if(donutIndex === donuts.length - 1 && index === donut.paths.length - 1) {
                            gsap.to('#Subtraction_5', { opacity: 1, duration: 0.5})
                            setTimeout(() => {
                                gsap.to('#snow-circle', { 
                                    opacity: 0, 
                                    duration: 1,
                                    onComplete: function() {
                                        gsap.to('#logo-spark', { opacity: 0, duration: .5});
                                        gsap.to('.zimmer-logo__fake, #logo', {
                                            width: logoSmallSize.width,
                                            height: logoSmallSize.height,
                                            duration: 1,
                                            delay: 1,
                                            ease: 'none'
                                        });
                                        gsap.to('.logo-container', {
                                            top: logoSmallSize.width / 2 - 40,
                                            duration: 1,
                                            delay: 1.5,
                                            ease: 'none',
                                            onComplete: function() {
                                                if(window.innerWidth < 768) {
                                                    gsap.to('.final-div', { top: '-100px', duration: 0.5});
                                                }
                                                gsap.to('#warmest-thoughts, #from-all-of-us, .bottom-logo', {
                                                    opacity: 1,
                                                    duration: 1,
                                                    onComplete: function() {
                                                        snowDrop();
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }, 300);
                        }
                    }
                });
            });
        })
    };
    new fairyDustCursor({ element: document.querySelector("#fairyDust") })


    function snowDrop() {
        const container = document.querySelector('#snows-drop');
        if(!container) return;
        const snowCount = 40;
        var html = '';
        for(var i = 0; i < snowCount; i++ ) {
            const randX = Math.random() * (100 - 1) + 1;
            const randTime = Math.random() * (20 - 5) + 5;
            const randWidth = Math.random() * (60 - 40) + 40;
            const randDelay = Math.random() * (10 - 0) + 0;
            html += `<img src="./assets/images/spark.svg" alt="Snow" 
            style="left: ${randX}%; transform: translate(-50%, -100%); 
            animation-duration: ${Math.floor(randTime)}s; 
            width: ${Math.floor(randWidth)}px; 
            animation-delay: ${Math.floor(randDelay)}s" 
            opacity: ${Math.random()}/>`;
        }
        container.querySelector('.container').innerHTML = html;
        
    }
    
    firstScreen();
    defaultStyle();

    window.addEventListener('resize', function() {
        defaultStyle();
    })
    firstSetup();

    function run(type = null) {
        document.querySelector('.star-click').classList.add('hidden');
        document.querySelector('.main').classList.add('before-show');
        gsap.to('.star-click', {
            top: '50%',
            opacity: 0,
            duration: 1,
            delay: 1,
            onComplete: function() {
                gsap.to('#spark', { opacity: 1 });
                gsap.to('.season-greeting', { 
                        opacity: 1, 
                        duration: 0.5, 
                        onComplete: function() {
                            document.querySelector('.season-greeting').classList.add('done');
                            seasonsDraw()
                        }
                    },
                );
            }
        });  

 



    }

    // snowCircleZoomIn();
    // seasonsDraw();
    // greetingDraw();
    // snowDonut();
    // snowDonutPathAnimation();
    // zimmerStrokeAnimate();
    // snowCircleZoomIn()

    var lastLoop = Date.now();

    function loop() {
        thisLoop = Date.now();
        const fps = Math.round(1000 / (thisLoop - lastLoop));
        lastLoop = thisLoop;
        requestAnimationFrame(loop);
    };

   requestAnimationFrame(loop);

   function reset(type = null) {
        gsap.killTweensOf("*");

        document.querySelector('.star-click').classList.remove('hidden')
        document.querySelector('.season-greeting').classList.remove('done');
        document.querySelector('.move-line').classList.remove('animation-done');
        document.querySelector('.main').classList.remove('before-show');

        const removeTag = ['DIV', 'path', 'circle', 'svg', 'g'];
        document.querySelectorAll('*').forEach(item => {
            if(removeTag.includes(item.tagName)) {
                item.setAttribute('style', '')
                item.style.cssText = '';
            }
        });

        document.querySelectorAll('#a4fe8d41-c939-41c7-b84f-11affc18a62a path').forEach(item => {
            gsap.set(item, {
                x: 0,
                y: 0
            });
        })

        var moveLine = document.querySelector('.move-line');
        moveLine.style.transform = `translate(-110%, -50%)`;

        gsap.set('.star-click', {
            top: '50%',
            opacity: 0
        });

        var ssgrPath = document.querySelectorAll('#seasons-greetings-path path');
        ssgrPath.forEach(item => {
            item.style.strokeDasharray = item.getTotalLength()
            item.style.strokeDashoffset = item.getTotalLength()
        });

        document.querySelectorAll('#snows-drop img').forEach(item => {
            item.remove()
        }) 
        defaultStyle();
        firstScreen();
        firstSetup();

   }

   var deviceWidth = window.innerWidth;
   window.addEventListener('resize', function(e) {
       if(this.window.innerWidth !== deviceWidth) {
        reset();
       }
   });


   document.querySelector('.sound p').addEventListener('click', function(e) {
       e.preventDefault();
       document.querySelector('.sound-btn').click();
   })
});