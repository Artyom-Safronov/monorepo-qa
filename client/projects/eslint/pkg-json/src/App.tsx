import { FC as FC } from 'react';

const App: FC = () => {
  // Нарушение: @typescript-eslint/no-unused-vars — переменная foo не используется
  // Нарушение: @typescript-eslint/explicit-function-return-type — нет возвращаемого типа
  // Нарушение: semi — отсутствие точки с запятой в конце
  const foo = function () { return }

  // Нарушение: @typescript-eslint/no-unused-vars — переменная re не используется
  // no-regex-spaces
  var re = /foo  bar/;


  // Нарушение: no-unused-labels — метка start не используется
  start: {
    // eslint-disable-next-line no-console
    console.log('Hello');
  }

  outer: for (let i = 1; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) continue outer;
      // Нарушение: no-console — использование console.log
      console.log(i, j);
    }
  }

  // Нарушение: @typescript-eslint/no-array-constructor — использование Array() вместо []
  // no-array-constructor
  Array();
  // eslint-disable-next-line @typescript-eslint/no-array-constructor
  Array(0, 1, 2);
  // eslint-disable-next-line @typescript-eslint/no-array-constructor
  new Array(0, 1, 2);

  // Нарушение: @typescript-eslint/no-inferrable-types — тип number избыточен, выводится из литерала
  const x: number = 15;

  // Нарушение: no-empty — пустой блок if
  // eqeqeq, no-empty
  if (x == 42) { }

  // Нарушение: @typescript-eslint/no-unused-vars — переменная item не используется
  // Нарушение: @typescript-eslint/explicit-function-return-type — нет возвращаемого типа
  const item = function () {
    // Нарушение: no-undef — переменная bar не определена
    switch (bar) {
      case 1:
        // Нарушение: @typescript-eslint/no-use-before-define — doSomething используется до определения
        doSomething();
       // no-fallthrough
      default:
        // no-useless-return
        return;
    }
  // Нарушение: semi — отсутствие точки с запятой
  }
  return (
    <div className="app" >
      <img alt='logo' src={"/logo.png"} ></img>
      <br></br>
    </div>
  // Нарушение: semi — отсутствие точки с запятой
  )
// Нарушение: semi — отсутствие точки с запятой
}


// Нарушение: @typescript-eslint/explicit-function-return-type — нет возвращаемого типа
function doSomething() {
  throw new Error('Function not implemented.');
}

// Нарушение: semi — отсутствие точки с запятой
export default App
