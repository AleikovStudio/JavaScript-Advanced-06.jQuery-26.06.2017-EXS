//Adding multiple elements to the DOM can be expensive, instead of repeatedly adding to the DOM we can create a DocumentFragment and add the elements to it instead. When we have built our hierarchy we can append the DocumentFragment to the DOM, which will add all of the fragment’s elements to the specified selector.

function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');
    //textarea
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);
    //buttons
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    //list
    list.addClass('results');
    //events
    $(incrementBtn).on('click', function () {
        textArea.val(+textArea.val() + 1)
    });
    $(addBtn).on('click', function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
}