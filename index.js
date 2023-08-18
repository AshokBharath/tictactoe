var button_display, button_value, current_value =0 , state = true;
function mark(button) {
    player_turn(current_value);
    current_value = current_value + 1;
    document.getElementById(button).innerHTML = button_display;
    document.getElementById(button).value = button_value;
    check_win(current_value);
    check_draw(current_value);
    document.getElementById(button).disabled = true;


}
function check_win(current_value) {
    if ((document.getElementById("b1").value == "x" && document.getElementById("b2").value == "x" && document.getElementById("b3").value == "x") || (document.getElementById("b1").value == "o" && document.getElementById("b2").value == "o" && document.getElementById("b3").value == "o")) {
        let val = current_value % 2 == 0 ? 2 : 1;
        print_result(val);
        state = false;

    }
    else if ((document.getElementById("b4").value == "x" && document.getElementById("b5").value == "x" && document.getElementById("b6").value == "x") || (document.getElementById("b4").value == "o" && document.getElementById("b5").value == "o" && document.getElementById("b6").value == "o")) {
        let val = current_value % 2 == 0 ? 2 : 1;
        print_result(val);
        state = false;
    }
    else if ((document.getElementById("b7").value == "x" && document.getElementById("b8").value == "x" && document.getElementById("b9").value == "x") || (document.getElementById("b7").value == "o" && document.getElementById("b8").value == "o" && document.getElementById("b9").value == "o")) {
        let val = current_value % 2 == 0 ? 2 : 1;
        print_result(val);
        state = false;

    }
    else if ((document.getElementById("b1").value == "x" && document.getElementById("b4").value == "x" && document.getElementById("b7").value == "x") || (document.getElementById("b1").value == "o" && document.getElementById("b4").value == "o" && document.getElementById("b7").value == "o")) {
        let val = current_value % 2 == 0 ? 2 : 1;
        print_result(val);
        state = false;
    }
    else if ((document.getElementById("b2").value == "x" && document.getElementById("b5").value == "x" && document.getElementById("b8").value == "x") || (document.getElementById("b2").value == "o" && document.getElementById("b5").value == "o" && document.getElementById("b8").value == "o")) {
        let val = current_value % 2 == 0 ? 2 : 1;
        print_result(val);
        state = false;
    }
    else if ((document.getElementById("b3").value == "x" && document.getElementById("b6").value == "x" && document.getElementById("b9").value == "x") || (document.getElementById("b3").value == "o" && document.getElementById("b6").value == "o" && document.getElementById("b9").value == "o")) {
        let val = current_value % 2 == 0 ? 2 : 1;
        print_result(val);
        state = false;
    }
    else if ((document.getElementById("b1").value == "x" && document.getElementById("b5").value == "x" && document.getElementById("b9").value == "x") || (document.getElementById("b1").value == "o" && document.getElementById("b5").value == "o" && document.getElementById("b9").value == "o")) {
        let val = current_value % 2 == 0 ? 2 : 1;
        print_result(val);
        state = false;
    }
    else if ((document.getElementById("b3").value == "x" && document.getElementById("b5").value == "x" && document.getElementById("b7").value == "x") || (document.getElementById("b3").value == "o" && document.getElementById("b5").value == "o" && document.getElementById("b7").value == "o")) {
        let val = current_value % 2 == 0 ? 2 : 1;
        print_result(val);
        state = false;

    }
}
function check_draw(current_value) {
    if ((current_value >= 9) && (state != false)) {
        document.getElementById("res").innerHTML = "draw";
        document.getElementById("ins").innerHTML = "";

    }

}
function print_result(val)
{
    document.getElementById("res").innerHTML = "Player " + (val) + " Won";
        document.getElementById("ins").innerHTML = "";
}
function player_turn() {
    if (current_value % 2 != 0 && current_value < 9) {
        document.getElementById("ins").innerHTML = "player 1's turn";
        button_display = "<b>O</b>";
        button_value = "o";

    }
    else if (current_value % 2 == 0 && current_value < 9) {
        document.getElementById("ins").innerHTML = "player 2's turn";
        button_display = "<b>X</b>";
        button_value = "x";
    }
}