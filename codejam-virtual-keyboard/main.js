const keys = [
  ['Backquote', '`', '~', 'ё', 'Ё'],
  ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '@', '2', '"'],
  ['Digit3', '3', '#', '3', '№'],
  ['Digit4', '4', '$', '4', ';'],
  ['Digit5', '5', '%', '5', '%'],
  ['Digit6', '6', '^', '6', ':'],
  ['Digit7', '7', '&', '7', '?'],
  ['Digit8', '8', '*', '8', '*'],
  ['Digit9', '9', '(', '9', '('],
  ['Digit0', '0', ')', '0', ')'],
  ['Minus', '-', '_', '-', '_'],
  ['Equal', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['KeyQ', 'q', 'Q', 'й', 'Й'],
  ['KeyW', 'w', 'W', 'ц', 'Ц'],
  ['KeyE', 'e', 'E', 'у', 'У'],
  ['KeyR', 'r', 'R', 'к', 'К'],
  ['KeyT', 't', 'T', 'е', 'Е'],
  ['KeyY', 'y', 'Y', 'н', 'Н'],
  ['KeyU', 'u', 'U', 'г', 'Г'],
  ['KeyI', 'i', 'I', 'ш', 'Ш'],
  ['KeyO', 'o', 'O', 'щ', 'Щ'],
  ['KeyP', 'p', 'P', 'з', 'З'],
  ['BracketLeft', '[', '{', 'х', 'Х'],
  ['BracketRight', ']', '}', 'ъ', 'Ъ'],
  ['Backslash', '\\', '|', '\\', '/'],
  ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'a', 'A', 'ф', 'Ф'],
  ['KeyS', 's', 'S', 'ы', 'Ы'],
  ['KeyD', 'd', 'D', 'в', 'В'],
  ['KeyF', 'f', 'F', 'а', 'А'],
  ['KeyG', 'g', 'G', 'п', 'П'],
  ['KeyH', 'h', 'H', 'р', 'Р'],
  ['KeyJ', 'j', 'J', 'о', 'О'],
  ['KeyK', 'k', 'K', 'л', 'Л'],
  ['KeyL', 'l', 'L', 'д', 'Д'],
  ['Semicolon', ';', ':', 'ж', 'Ж'],
  ['Quote', '\'', '"', 'э', 'Э'],
  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['KeyZ', 'z', 'Z', 'я', 'Я'],
  ['KeyX', 'x', 'X', 'ч', 'Ч'],
  ['KeyC', 'c', 'C', 'с', 'С'],
  ['KeyV', 'v', 'V', 'м', 'М'],
  ['KeyB', 'b', 'B', 'и', 'И'],
  ['KeyN', 'n', 'N', 'т', 'Т'],
  ['KeyM', 'm', 'M', 'ь', 'Ь'],
  ['Comma', ',', '<', 'б', 'Б'],
  ['Period', '.', '>', 'ю', 'Ю'],
  ['Slash', '/', '?', '.', ','],
  ['ArrowUp', '↑', '↑', '↑', '↑'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', 'Space', 'Space', 'Space', 'Space'],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', '←', '←', '←', '←'],
  ['ArrowDown', '↓', '↓', '↓', '↓'],
  ['ArrowRight', '→', '→', '→', '→'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
];


function createWrapper() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  return wrapper;
}

function createTextarea() {
  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  textarea.setAttribute('name', 'message');
  textarea.setAttribute('rows', '20');
  textarea.setAttribute('cols', '100');
  textarea.setAttribute('autofocus', '');
  return textarea;
}

function generateKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  function createButtons(el) {
    const key = document.createElement('div');
    key.classList.add('keyboard__key');
    key.innerHTML = `<span class="keyboard__${el[0]} on">
                          <span class="down">${el[1]}</span>
                          <span class="up">${el[2]}</span>
                        </span>
                        <span class="keyboard__${el[0]} off">
                          <span class="down">${el[3]}</span>
                          <span class="up">${el[4]}</span>
                        </span>`;
    keyboard.append(key);
  }

  keys.map(createButtons);


  keyboard.addEventListener('mousedown', (event) => {
    if (event.target.closest('div').className === 'keyboard__key') {
      event.target.closest('div').classList.add('active');
    }
  });
  keyboard.addEventListener('mouseup', (event) => {
    event.target.closest('div').classList.remove('active');
  });

  return keyboard;
}

function setCapsLockActive() {
  document.querySelector('.keyboard__CapsLock');
}

function changeSymbol() {
  const down = document.querySelectorAll('.down');
  const up = document.querySelectorAll('.up');
  down.forEach((el) => {
    el.classList.replace('down', 'up');
  });
  up.forEach((el) => {
    el.classList.replace('up', 'down');
  });
}

function start() {
  const wrapper = createWrapper();
  document.body.appendChild(wrapper);
  const textarea = createTextarea();
  wrapper.appendChild(textarea);
  const keyboard = generateKeyboard();
  wrapper.appendChild(keyboard);
  setCapsLockActive();

  document.querySelector('.keyboard').addEventListener('click', (event) => {
    const form1 = document.querySelector('.textarea');
    form1.focus();
    if (event.target.closest('div').className !== 'keyboard__key') {
      form1.value += '';
    } else if (event.target.innerText === 'Enter') {
      form1.value += '\n';
    } else if (event.target.innerText === 'Tab') {
      form1.value += '\t';
    } else if (event.target.innerText === 'Space') {
      form1.value += ' ';
    } else if (event.target.textContent === 'Shift'
            || event.target.textContent === 'Ctrl'
            || event.target.textContent === 'Alt'
            || event.target.textContent === '←'
            || event.target.textContent === '↓'
            || event.target.textContent === '↑'
            || event.target.textContent === '→'
            || event.target.textContent === 'Win'
    ) {
      form1.value += '';
    } else if (event.target.innerText === 'CapsLock') {
      document.querySelector('.keyboard__CapsLock').classList.toggle('hightlight');
      changeSymbol();
    } else if (event.target.innerText === 'Del') {
      form1.value = form1.value.slice(0, -1);
    } else if (event.target.innerText === 'Backspace') {
      form1.value = form1.value.slice(0, -1);
    } else {
      form1.value += `${event.target.innerText}`;
    }
  });
}

window.onload = function loadWindow() {
  start();
};

window.addEventListener('keydown', (event) => {
  const form1 = document.querySelector('.textarea');
  form1.focus();
  event.preventDefault();

  if (event.altKey) {
    if (event.altKey && event.key === 'Shift') {
      const on = document.querySelectorAll('.on');
      const off = document.querySelectorAll('.off');
      on.forEach((el) => {
        el.classList.replace('on', 'off');
      });
      off.forEach((el) => {
        el.classList.replace('off', 'on');
      });
    }
  }

  if (event.key === 'Shift') {
    event.preventDefault();
    changeSymbol();
  } else if (event.key === 'CapsLock') {
    document.querySelector('.keyboard__CapsLock').classList.toggle('hightlight');
    changeSymbol();
  } else if (event.key === 'Control'
          || event.key === 'Meta'
          || event.key === 'Alt'
          || event.key === 'ArrowDown'
          || event.key === 'ArrowLeft'
          || event.key === 'ArrowRight'
          || event.key === 'ArrowUp'
  ) {
    form1.value += '';
  } else if (event.key === 'Tab') {
    form1.value += '\t';
  } else {
    form1.value += `${event.key}`;
  }
  document.querySelector(`.keyboard__${event.code}`).closest('DIV').classList.add('active');
});

window.addEventListener('keyup', (event) => {
  document.querySelector(`.keyboard__${event.code}`).closest('DIV').classList.remove('active');

  if (event.key === 'Shift') {
    event.preventDefault();
    changeSymbol();
  }
});
