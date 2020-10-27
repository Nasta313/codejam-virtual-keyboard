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

function createDescription() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.innerHTML="<p>Change lang -  Alt+ Shift</p>"
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

  keys.map((el) => {
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
  });

  keyboard.addEventListener('mousedown', ({ target }) => {
    if (target.closest('div').className === 'keyboard__key') {
      target.closest('div').classList.add('active');
    }
  });

  keyboard.addEventListener('mouseup', ({ target }) => {
    target.closest('div').classList.remove('active');
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

  const description = createDescription();
  wrapper.appendChild(description);

  const textarea = createTextarea();
  wrapper.appendChild(textarea);

  const keyboard = generateKeyboard();
  wrapper.appendChild(keyboard);
  setCapsLockActive();

  document.querySelector('.keyboard').addEventListener('click', ({ target }) => {
    const textarea = document.querySelector('.textarea');

    textarea.focus();

    if (target.closest('div').className !== 'keyboard__key') {
      textarea.value += '';
    } else if (target.innerText === 'Enter') {
      textarea.value += '\n';
    } else if (target.innerText === 'Tab') {
      textarea.value += '\t';
    } else if (target.innerText === 'Space') {
      textarea.value += ' ';
    } else if (target.textContent === 'Shift'
            || target.textContent === 'Ctrl'
            || target.textContent === 'Alt'
            || target.textContent === '←'
            || target.textContent === '↓'
            || target.textContent === '↑'
            || target.textContent === '→'
            || target.textContent === 'Win'
    ) {
      textarea.value += '';
    } else if (target.innerText === 'CapsLock') {
      document.querySelector('.keyboard__CapsLock').classList.toggle('hightlight');
      changeSymbol();
    } else if (target.innerText === 'Del') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (target.innerText === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else {
      textarea.value += `${target.innerText}`;
    }
  });
}

window.onload = start();

window.addEventListener('keydown', (event) => {
  const textarea = document.querySelector('.textarea');

  textarea.focus();
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
  } else if (event.key === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  } else if (event.key === 'Enter') {
    textarea.value += '\n';
  } else if (event.key === 'Delete') {
    textarea.value = textarea.value.slice(0, -1);
  } else if (event.key === 'Tab') {
    textarea.value += '\t';
  } else if (event.key.length === 1) {
    textarea.value += `${event.key}`;
  } else {
    textarea.value += '';
  } 

  const keyboard = document.querySelector(`.keyboard__${event.code}`);

  if (keyboard){
    keyboard.closest('DIV').classList.add('active');
  }

});

window.addEventListener('keyup', (event) => {

  const keyboard = document.querySelector(`.keyboard__${event.code}`);

  if (keyboard){
    keyboard.closest('DIV').classList.remove('active');
  }

  if (event.key === 'Shift') {
    event.preventDefault();
    changeSymbol();
  }

});
