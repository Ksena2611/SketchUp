Код	Коментар
let currentInput = '0';	Змінна, яка зберігає поточне число на екрані (те, що бачить користувач)
let previousInput = '';	Змінна для верхнього рядка — зберігає перше число та оператор (наприклад "15 +")
let operator = null;	Змінна для збереження обраного оператора (+, -, *, /, %)
let shouldResetScreen = false;	Прапорець, який вказує, чи потрібно очистити екран перед введенням нового числа
const currentDisplay = document.getElementById('current');	Отримуємо доступ до нижнього (основного) рядка дисплея
const previousDisplay = document.getElementById('previous');	Отримуємо доступ до верхнього рядка дисплея
function updateDisplay() {	Функція, яка оновлює інформацію на екрані
currentDisplay.textContent = currentInput;	Виводимо поточне число на нижній рядок
previousDisplay.textContent = previousInput;	Виводимо приклад на верхній рядок
}	Закінчення функції
	updateDisplay
function appendNumber(number) {	Функція для додавання цифри (0-9)
if (shouldResetScreen) {	Якщо після оператора — очищуємо екран
currentInput = '';	Очищаємо поточне значення
shouldResetScreen = false;	Вимикаємо прапорець
}	
if (currentInput === '0' && number !== '0') {	Якщо зараз "0" — замінюємо його новою цифрою
currentInput = number;	Заміна нуля
} else {	В іншому випадку
currentInput += number;	Просто додаємо цифру в кінець
}	
updateDisplay();	Оновлюємо екран
}	Закінчення функції
	appendNumber
function appendDecimal() {	Функція для додавання десяткової крапки
if (shouldResetScreen) {	Якщо потрібно — скидаємо екран
currentInput = '0';	
shouldResetScreen = false;	
}	
if (!currentInput.includes('.')) {	Якщо крапки ще немає
currentInput += '.';	Додаємо крапку
}	
updateDisplay();	Оновлюємо екран
}	Закінчення функції
function appendOperator(op) {	Функція обробки операторів (+, -, ×, ÷)
if (operator !== null && !shouldResetScreen) {	Якщо вже є оператор — спочатку рахуємо
calculate();	Виконуємо попередній розрахунок
}	
previousInput =	Записуємо перше число + оператор у верхній рядок
${currentInput} ${op}	
;	
operator = op;	Зберігаємо обраний оператор
shouldResetScreen = true;	Вмикаємо скидання екрану для нового числа
updateDisplay();	Оновлюємо екран
}	
function calculate() {	Головна функція — виконує розрахунок
` if (operator === null	
let computation;	Змінна для результату обчислення
const prev = parseFloat(previousInput);	Перетворюємо верхнє значення у число
const current = parseFloat(currentInput);	Перетворюємо поточне значення у число
switch (operator) {	Перевіряємо який оператор вибрано
case '+':	Додавання
computation = prev + current;	
break;	
case '-': computation = prev - current; break;	Віднімання
case '*': computation = prev * current; break;	Множення
case '/':	Ділення
computation = current === 0 ? 'Помилка' : prev / current;	Захист від ділення на нуль
break;	
case '%': computation = prev % current; break;	Відсоток (залишок)
default: return;	Якщо оператор невідомий
}	
currentInput = computation.toString();	Результат стає поточним числом
previousInput = '';	Очищуємо верхній рядок
operator = null;	Скидаємо оператор
shouldResetScreen = true;	Готуємося до нового введення
updateDisplay();	Показуємо результат
}	Закінчення функції
	calculate
function clearAll() {	Функція повного очищення (AC)
currentInput = '0';	Повертаємо 0
previousInput = '';	Очищаємо верхній рядок
operator = null;	Скидаємо оператор
updateDisplay();	Оновлюємо екран
}	
function deleteLast() {	Функція видалення останньої цифри (⌫)
if (shouldResetScreen) return;	Якщо екран треба скинути — не видаляємо
currentInput = currentInput.slice(0, -1);	Видаляємо останній символ
` if (currentInput === ''	
currentInput = '0';	Ставимо 0
}	
updateDisplay();	Оновлюємо екран
}	
document.addEventListener('keydown', (e) => {	Додаємо підтримку клавіатури
if (e.key >= '0' && e.key <= '9') appendNumber(e.key);	Обробка цифр
if (e.key === '.') appendDecimal();	Обробка крапки
` if (e.key === '+'	
if (e.key === '*') appendOperator('*');	Множення
if (e.key === '/') appendOperator('/');	Ділення
` if (e.key === 'Enter'	
if (e.key === 'Backspace') deleteLast();	Backspace = видалення
if (e.key === 'Escape') clearAll();	Escape = повне очищення
});	Закінчення обробки клавіатури
updateDisplay();	Запускаємо показ "0" при завантаженні сторінки
	