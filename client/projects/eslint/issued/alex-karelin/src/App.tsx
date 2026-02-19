/* eslint-disable notice/notice */
// Нарушение: no-use-before-define — React используется до определения (import hoisting)
import React, {useState, useEffect} from 'react'
// Нарушение: @typescript-eslint/no-unused-vars — connect импортирован, но не используется
import {connect} from 'react-redux'
import {ListRow} from '../../../../../common/src/ListRow'

// Нарушение: @typescript-eslint/no-empty-interface — пустой интерфейс
// Нарушение: @typescript-eslint/no-unused-vars — интерфейс не используется
  interface EmptyProps {}

// Нарушение: @typescript-eslint/no-unused-vars — тип не используется
type SaveHandler = Function

// Нарушение: @typescript-eslint/no-unused-vars — интерфейс не используется
// Нарушение: @typescript-eslint/member-delimiter-style — запятая вместо none в multiline
interface AppState {
  count: number,
  name: string,
}

// Нарушение: @typescript-eslint/no-unused-vars — класс не используется
class UserService {
  // Нарушение: @typescript-eslint/explicit-member-accessibility — нет модификатора доступа
  // Нарушение: @typescript-eslint/no-inferrable-types — тип string выводится из литерала
  name: string = 1;
  // Нарушение: lines-between-class-members — нет пустой строки между членами класса
  // Нарушение: @typescript-eslint/explicit-member-accessibility — нет модификатора доступа
  // Нарушение: class-methods-use-this — метод не использует this
  reset() {}
}

// Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
// Нарушение: semi + @typescript-eslint/semi — точка с запятой (конфиг требует never)
const MAGIC_NUMBER = 42;

// Нарушение: @typescript-eslint/indent — отступ 4 вместо 2
// Нарушение: no-console — использование console
const log = (msg: string) => {
    console.log(msg)
}

// Нарушение: no-use-before-define + @typescript-eslint/no-use-before-define — использование до определения
// Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
const result = computeValue(110)

function computeValue(x: number): number {
  return x * 2
}

// Нарушение: @typescript-eslint/no-explicit-any — тип any в Promise
const fetchData = async (): Promise<any> => {
  try {
    const response = await fetch('https://api.example.com/data')
    return response.json()
  // Нарушение: @typescript-eslint/no-explicit-any — any в catch
  } catch (e: any) {
    // Нарушение: no-console
    console.error('Fetch failed:', e)
    return null
  }
}

// Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
const name = 'outer'
// Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
const greet = () => {
  // Нарушение: @typescript-eslint/no-shadow — name затеняет переменную из внешней области
  const name = 'inner'
  return name
}

// Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
// Нарушение: no-return-assign — присваивание в return
let counter = 0
const increment = () => counter += 1

const App: React.FC = () => {
  // Нарушение: @typescript-eslint/no-unused-vars — data не используется
  // Нарушение: @typescript-eslint/no-explicit-any — тип any в useState
  const [data, setData] = useState<any>(null)

  // Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
  const unusedVar = 'not used'

  // Нарушение: object-curly-spacing — пробелы внутри фигурных скобок (конфиг требует never)
  // Нарушение: @typescript-eslint/no-unused-vars — переменная не используется
  const config = { timeout: 3000, retries: 5 }

  useEffect(() => {
    fetchData().then(setData)
  }, [])

  // Нарушение: @typescript-eslint/no-unused-vars — интерфейс не используется
  // Нарушение: @typescript-eslint/member-delimiter-style — точка с запятой вместо none
  interface UserInfo {
    id: number;
    email: string;
  }

  const handleEdit = (ruleName: string) => {
    // Нарушение: no-console
    console.log('Edit:', ruleName)
  }

  const handleDelete = (ruleName: string) => {
    // Нарушение: no-console
    console.log('Delete:', ruleName)
  }

  return (
    <div
        // Нарушение: react/jsx-indent-props — отступ 8 вместо 2
        // Нарушение: react/jsx-closing-bracket-location — неправильное расположение закрывающей скобки
        style={{padding: '24px'}}>
      <div>
        <h2>Alex Karelin — ESLint Legacy Config</h2>
        <p style={{color: '#666'}}>
          Этот код содержит нарушения правил ESLint из airbnb + typescript-eslint конфига
        </p>
      </div>

      <div style={{display: 'flex', gap: '12px', margin: '16px 0'}}>
        {/* Нарушение: react/button-has-type — отсутствует атрибут type у button */}
        <button onClick={() => log('save')}>Сохранить</button>
        <button onClick={() => log('reset')}>Сбросить</button>
      </div>

      <div>
        <h3>Активные правила ESLint</h3>

        <ListRow
          title="notice/notice"
          description="Требует copyright-заголовок в начале файла"
          onEdit={() => handleEdit('notice/notice')}
          onDelete={() => handleDelete('notice/notice')}
        />

        <ListRow
          title="semi / @typescript-eslint/semi"
          description="Запрещает точку с запятой (настроено 'never')"
          onEdit={() => handleEdit('semi')}
          onDelete={() => handleDelete('semi')}
        />

        <ListRow
          title="no-console"
          description="Запрещает использование console.*"
          onEdit={() => handleEdit('no-console')}
          onDelete={() => handleDelete('no-console')}
        />

        <ListRow
          title="@typescript-eslint/indent"
          description="Требует отступ 2 пробела"
          onEdit={() => handleEdit('@typescript-eslint/indent')}
        />

        <ListRow
          title="@typescript-eslint/no-shadow"
          description="Запрещает затенение переменных из внешней области видимости"
          onEdit={() => handleEdit('@typescript-eslint/no-shadow')}
        />

        <ListRow
          title="@typescript-eslint/explicit-member-accessibility"
          description="Требует модификаторы доступа для членов класса"
          onEdit={() => handleEdit('@typescript-eslint/explicit-member-accessibility')}
        />

        <ListRow
          title="@typescript-eslint/member-delimiter-style"
          description="Требует 'none' для multiline interface delimiter"
          onEdit={() => handleEdit('@typescript-eslint/member-delimiter-style')}
        />

        <ListRow
          title="comma-dangle"
          description="Запрещает trailing comma"
          onEdit={() => handleEdit('comma-dangle')}
        />

        <ListRow
          title="react/jsx-indent-props"
          description="Требует JSX props отступ 2 пробела"
          onEdit={() => handleEdit('react/jsx-indent-props')}
        />

        <ListRow
          title="react/button-has-type"
          description="Требует явный атрибут type у button"
          onEdit={() => handleEdit('react/button-has-type')}
        />
      </div>
    </div>
  )
}

export default App
