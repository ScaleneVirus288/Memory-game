var cards = ["2.png", "3.png", "4.png", "4.png", "5.png", "6.png", "3.png", "7.png", "2.png", "6.png", "7.png", "5.png"];
var cards2 = ["8.png", "8.png", "9.png", "9.png", "10.png", "10.png", "dama.png", "dama.png", "walet.png", "walet.png", "as.png", "as.png"];
var cards3 = ["2.png", "3.png", "4.png", "4.png", "5.png", "6.png", "3.png", "7.png", "2.png", "6.png", "7.png", "5.png", "8.png", "8.png", "9.png",
    "9.png", "10.png", "10.png", "dama.png", "dama.png"];
var cards4 = ["2.png", "3.png", "4.png", "4.png", "3.png", "2.png"];
var cards5 = ["2.png", "3.png", "4.png", "4.png", "5.png", "6.png", "3.png", "7.png", "2.png", "6.png", "7.png", "5.png", "8.png", "8.png",
    "9.png", "9.png", "10.png", "10.png", "dama.png", "dama.png", "walet.png", "walet.png", "as.png", "as.png", "krol.png", "krol.png", "joker.png", "joker.png"];
var pairsLeft;
var liczbaStartowa;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

shuffle(cards);
shuffle(cards2);
shuffle(cards3);
shuffle(cards4);
shuffle(cards5);

var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");

var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");

var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");

var c12 = document.getElementById("c12");
var c13 = document.getElementById("c13");
var c14 = document.getElementById("c14");
var c15 = document.getElementById("c15");

var c16 = document.getElementById("c16");
var c17 = document.getElementById("c17");
var c18 = document.getElementById("c18");
var c19 = document.getElementById("c19");

var c20 = document.getElementById("c20");
var c21 = document.getElementById("c21");
var c22 = document.getElementById("c22");
var c23 = document.getElementById("c23");

var c24 = document.getElementById("c24");
var c25 = document.getElementById("c25");
var c26 = document.getElementById("c26");
var c27 = document.getElementById("c27");

var d0 = document.getElementById("d0");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");

var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");
var d6 = document.getElementById("d6");
var d7 = document.getElementById("d7");

var d8 = document.getElementById("d8");
var d9 = document.getElementById("d9");
var d10 = document.getElementById("d10");
var d11 = document.getElementById("d11");

var d12 = document.getElementById("d12");
var d13 = document.getElementById("d13");
var d14 = document.getElementById("d14");
var d15 = document.getElementById("d15");

var d16 = document.getElementById("d16");
var d17 = document.getElementById("d17");
var d18 = document.getElementById("d18");
var d19 = document.getElementById("d19");

var e0 = document.getElementById("e0");
var e1 = document.getElementById("e1");
var e2 = document.getElementById("e2");
var e3 = document.getElementById("e3");

var e4 = document.getElementById("e4");
var e5 = document.getElementById("e5");
var e6 = document.getElementById("e6");
var e7 = document.getElementById("e7");

var e8 = document.getElementById("e8");
var e9 = document.getElementById("e9");
var e10 = document.getElementById("e10");
var e11 = document.getElementById("e11");

var f0 = document.getElementById("f0");
var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");

var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");


c0.addEventListener("click", function () {
    revealCard(0);
})
c1.addEventListener("click", function () {
    revealCard(1);
})
c2.addEventListener("click", function () {
    revealCard(2);
})
c3.addEventListener("click", function () {
    revealCard(3);
})


c4.addEventListener("click", function () {
    revealCard(4);
})
c5.addEventListener("click", function () {
    revealCard(5);
})
c6.addEventListener("click", function () {
    revealCard(6);
})
c7.addEventListener("click", function () {
    revealCard(7);
})


c8.addEventListener("click", function () {
    revealCard(8);
})
c9.addEventListener("click", function () {
    revealCard(9);
})
c10.addEventListener("click", function () {
    revealCard(10);
})
c11.addEventListener("click", function () {
    revealCard(11);
})


c12.addEventListener("click", function () {
    revealCard(12);
})
c13.addEventListener("click", function () {
    revealCard(13);
})
c14.addEventListener("click", function () {
    revealCard(14);
})
c15.addEventListener("click", function () {
    revealCard(15);
})


c16.addEventListener("click", function () {
    revealCard(16);
})
c17.addEventListener("click", function () {
    revealCard(17);
})
c18.addEventListener("click", function () {
    revealCard(18);
})
c19.addEventListener("click", function () {
    revealCard(19);
})


c20.addEventListener("click", function () {
    revealCard(20);
})
c21.addEventListener("click", function () {
    revealCard(21);
})
c22.addEventListener("click", function () {
    revealCard(22);
})
c23.addEventListener("click", function () {
    revealCard(23);
})
c24.addEventListener("click", function () {
    revealCard(24);
})
c25.addEventListener("click", function () {
    revealCard(25);
})
c26.addEventListener("click", function () {
    revealCard(26);
})
c27.addEventListener("click", function () {
    revealCard(27);
})



d0.addEventListener("click", function () {
    revealCard(0);
})
d1.addEventListener("click", function () {
    revealCard(1);
})
d2.addEventListener("click", function () {
    revealCard(2);
})
d3.addEventListener("click", function () {
    revealCard(3);
})


d4.addEventListener("click", function () {
    revealCard(4);
})
d5.addEventListener("click", function () {
    revealCard(5);
})
d6.addEventListener("click", function () {
    revealCard(6);
})
d7.addEventListener("click", function () {
    revealCard(7);
})


d8.addEventListener("click", function () {
    revealCard(8);
})
d9.addEventListener("click", function () {
    revealCard(9);
})
d10.addEventListener("click", function () {
    revealCard(10);
})
d11.addEventListener("click", function () {
    revealCard(11);
})


d12.addEventListener("click", function () {
    revealCard(12);
})
d13.addEventListener("click", function () {
    revealCard(13);
})
d14.addEventListener("click", function () {
    revealCard(14);
})
d15.addEventListener("click", function () {
    revealCard(15);
})


d16.addEventListener("click", function () {
    revealCard(16);
})
d17.addEventListener("click", function () {
    revealCard(17);
})
d18.addEventListener("click", function () {
    revealCard(18);
})
d19.addEventListener("click", function () {
    revealCard(19);
})

e0.addEventListener("click", function () {
    revealCard(0);
})
e1.addEventListener("click", function () {
    revealCard(1);
})
e2.addEventListener("click", function () {
    revealCard(2);
})
e3.addEventListener("click", function () {
    revealCard(3);
})


e4.addEventListener("click", function () {
    revealCard(4);
})
e5.addEventListener("click", function () {
    revealCard(5);
})
e6.addEventListener("click", function () {
    revealCard(6);
})
e7.addEventListener("click", function () {
    revealCard(7);
})


e8.addEventListener("click", function () {
    revealCard(8);
})
e9.addEventListener("click", function () {
    revealCard(9);
})
e10.addEventListener("click", function () {
    revealCard(10);
})
e11.addEventListener("click", function () {
    revealCard(11);
})

f0.addEventListener("click", function () {
    revealCard(0);
})
f1.addEventListener("click", function () {
    revealCard(1);
})
f2.addEventListener("click", function () {
    revealCard(2);
})
f3.addEventListener("click", function () {
    revealCard(3);
})


f4.addEventListener("click", function () {
    revealCard(4);
})
f5.addEventListener("click", function () {
    revealCard(5);
})


var oneVisible = false;

var turnCounter = 0;

var visible_nr;

var lock = false;


function start(nr) {
    if (nr == 3) {
        console.log(nr);
        liczbaStartowa = nr;
        pairsLeft = nr;
        var elmnt1 = $("#dol")
        elmnt1.remove();
        $("#gra3").css('opacity', 1);
        $("#gra3").css('display', 'block');
    } else if (nr == 6) {
        console.log(nr);
        liczbaStartowa = nr;
        pairsLeft = nr;
        var elmnt1 = $("#dol")
        elmnt1.remove();
        $("#gra6").css('opacity', 1);
        $("#gra6").css('display', 'block');
    } else if (nr == 10) {
        console.log(nr);
        liczbaStartowa = nr;
        pairsLeft = nr;
        var elmnt1 = $("#dol")
        elmnt1.remove();
        $("#gra10").css('opacity', 1);
        $("#gra10").css('display', 'block');
    } else if (nr == 14) {
        console.log(nr);
        liczbaStartowa = nr;
        pairsLeft = nr;
        var elmnt1 = $("#dol")
        elmnt1.remove();
        $("#gra14").css('opacity', 1);
        $("#gra14").css('display', 'block');
    }
}


function revealCard(nr) {
    if (liczbaStartowa == 14) {
        console.log("ls14 "+nr);
        var opacityValue = $('#c'+nr).css('opacity');
        if (opacityValue != 0 && lock == false) {

            lock = true;

            var obraz = "url(Gra/" + cards5[nr] + ")";

            $('#c'+nr).css('background-image', obraz);
            $('#c'+nr).addClass('cardA');
            $('#c'+nr).removeClass('card');

            if(oneVisible == false){
                oneVisible = true;
                visible_nr = nr;
                lock = false;
            } else {
                if (cards5[visible_nr] == cards5[nr])
                {
                    setTimeout(function () {
                        hide2Cards(nr, visible_nr);
                    }, 750);
                } else
                {
                    setTimeout(function () {
                        restore2Cards(nr, visible_nr);
                    }, 1000);
                }
                turnCounter++;
                $(".score").html('Turn counter: '+turnCounter);
                oneVisible = false;
            }
        }
    } else if (liczbaStartowa == 10) {
        console.log("ls10 "+nr);
        var opacityValue = $('#d'+nr).css('opacity');
        if (opacityValue != 0 && lock == false) {

            lock = true;

            var obraz = "url(Gra/" + cards3[nr] + ")";

            $('#d'+nr).css('background-image', obraz);
            $('#d'+nr).addClass('cardA');
            $('#d'+nr).removeClass('card');

            if(oneVisible == false){
                oneVisible = true;
                visible_nr = nr;
                lock = false;
            } else {
                if (cards3[visible_nr] == cards3[nr])
                {
                    setTimeout(function () {
                        hide2Cards(nr, visible_nr);
                    }, 750);
                } else
                {
                    setTimeout(function () {
                        restore2Cards(nr, visible_nr);
                    }, 1000);
                }
                turnCounter++;
                $(".score").html('Turn counter: '+turnCounter);
                oneVisible = false;
            }
        }
    } else if (liczbaStartowa == 6) {
        console.log("ls6 "+nr);
        var opacityValue = $('#e'+nr).css('opacity');
        if (opacityValue != 0 && lock == false) {

            lock = true;

            var obraz = "url(Gra/" + cards[nr] + ")";

            $('#e'+nr).css('background-image', obraz);
            $('#e'+nr).addClass('cardA');
            $('#e'+nr).removeClass('card');

            if(oneVisible == false){
                oneVisible = true;
                visible_nr = nr;
                lock = false;
            } else {
                if (cards[visible_nr] == cards[nr])
                {
                    setTimeout(function () {
                        hide2Cards(nr, visible_nr);
                    }, 750);
                } else
                {
                    setTimeout(function () {
                        restore2Cards(nr, visible_nr);
                    }, 1000);
                }
                turnCounter++;
                $(".score").html('Turn counter: '+turnCounter);
                oneVisible = false;
            }
        }
    } else if (liczbaStartowa == 3) {
        console.log("ls3 "+nr);
        var opacityValue = $('#f'+nr).css('opacity');
        if (opacityValue != 0 && lock == false) {

            lock = true;

            var obraz = "url(Gra/" + cards4[nr] + ")";

            $('#f'+nr).css('background-image', obraz);
            $('#f'+nr).addClass('cardA');
            $('#f'+nr).removeClass('card');

            if(oneVisible == false){
                oneVisible = true;
                visible_nr = nr;
                lock = false;
            } else {
                if (cards4[visible_nr] == cards4[nr])
                {
                    setTimeout(function () {
                        hide2Cards(nr, visible_nr);
                    }, 750);
                } else
                {
                    setTimeout(function () {
                        restore2Cards(nr, visible_nr);
                    }, 1000);
                }
                turnCounter++;
                $(".score").html('Turn counter: '+turnCounter);
                oneVisible = false;
            }
        }
    }
}

function hide2Cards(nr1, nr2) {
    if (liczbaStartowa == 14) {
        console.log("hide14 "+nr1);
        $('#c' + nr1).css('opacity', '0');
        $('#c' + nr2).css('opacity', '0');
        pairsLeft--;
        if (pairsLeft == 0) {
            $('.board').html('<h1>You won<br>in ' + turnCounter + ' rounds</h1><br> <div onClick="window.location.reload();"><a style="cursor: pointer">Once more??</a></div>');
        }
        lock = false;
    } else if (liczbaStartowa == 10){
        console.log("hide10 "+nr1);
        $('#d' + nr1).css('opacity', '0');
        $('#d' + nr2).css('opacity', '0');
        pairsLeft--;
        if (pairsLeft == 0) {
            $('.board').html('<h1>You won<br>in ' + turnCounter + ' rounds</h1><br> <div onClick="window.location.reload();"><a style="cursor: pointer">Once more??</a></div>');
        }
        lock = false;
    } else if (liczbaStartowa == 6) {
        console.log("hide6 "+nr1);
        $('#e' + nr1).css('opacity', '0');
        $('#e' + nr2).css('opacity', '0');
        pairsLeft--;
        if (pairsLeft == 0) {
            $('.board').html('<h1>You won<br>in ' + turnCounter + ' rounds</h1><br> <div onClick="window.location.reload();"><a style="cursor: pointer">Once more??</a></div>');
        }
        lock = false;
    } else if (liczbaStartowa == 3) {
        console.log("hide3 "+nr1);
        $('#f' + nr1).css('opacity', '0');
        $('#f' + nr2).css('opacity', '0');
        pairsLeft--;
        if (pairsLeft == 0) {
            $('.board').html('<h1>You won<br>in ' + turnCounter + ' rounds</h1><br> <div onClick="window.location.reload();"><a style="cursor: pointer;">Once more??</a></div>');
        }
        lock = false;
    }
}

function restore2Cards(nr1, nr2) {
    if (liczbaStartowa == 14) {
        console.log("restore14 "+nr1);
        $('#c' + nr1).css('background-image', 'url(Gra/tyl.png)');
        $('#c' + nr1).addClass('card');
        $('#c' + nr1).removeClass('cardA');

        $('#c' + nr2).css('background-image', 'url(Gra/tyl.png)');
        $('#c' + nr2).addClass('card');
        $('#c' + nr2).removeClass('cardA');
        lock = false;
    } else if (liczbaStartowa == 10) {
        console.log("restore10 "+nr1);
        $('#d' + nr1).css('background-image', 'url(Gra/tyl.png)');
        $('#d' + nr1).addClass('card');
        $('#d' + nr1).removeClass('cardA');

        $('#d' + nr2).css('background-image', 'url(Gra/tyl.png)');
        $('#d' + nr2).addClass('card');
        $('#d' + nr2).removeClass('cardA');
        lock = false;
    } else if (liczbaStartowa == 6) {
        console.log("restore6 "+nr1);
        $('#e' + nr1).css('background-image', 'url(Gra/tyl.png)');
        $('#e' + nr1).addClass('card');
        $('#e' + nr1).removeClass('cardA');

        $('#e' + nr2).css('background-image', 'url(Gra/tyl.png)');
        $('#e' + nr2).addClass('card');
        $('#e' + nr2).removeClass('cardA');
        lock = false;
    } else if (liczbaStartowa == 3) {
        console.log("restore3 "+nr1);
        $('#f' + nr1).css('background-image', 'url(Gra/tyl.png)');
        $('#f' + nr1).addClass('card');
        $('#f' + nr1).removeClass('cardA');

        $('#f' + nr2).css('background-image', 'url(Gra/tyl.png)');
        $('#f' + nr2).addClass('card');
        $('#f' + nr2).removeClass('cardA');
        lock = false;
    }
}