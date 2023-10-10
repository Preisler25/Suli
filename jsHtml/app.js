let display = document.getElementById('display');
let fb = document.getElementById('format_black');
let fr = document.getElementById('format_red');
let input = document.getElementById('main_text');
let raw_display = document.getElementById('raw_display');
let part_display = document.getElementById('part_display');

class text_object {
    constructor() {
        this.text = ''; // input.value
        this.style = []; //list of indexes of start and and values [[start, end, style_class], [start_index, end_index, style_class]]
        this.html_string = '';
    }
    convert_to_html() {
        this.html_string = this.text;
        for (let i = 0; i < this.style.length; i++) {
            let start = this.style[i][0];
            let end = this.style[i][1];
            let style_class = this.style[i][2];
            this.html_string = this.html_string.substring(0, start) + `<span class="${style_class}">` + this.html_string.substring(start, end) + `</span>` + this.html_string.substring(end);
        }
    }
}

let text = new text_object();

function update_display() {
    text.text = input.value;
    text.convert_to_html();
    display.innerHTML = text.html_string;
    raw_display.innerHTML = text.text;
    part_display.innerHTML = text.style;
}