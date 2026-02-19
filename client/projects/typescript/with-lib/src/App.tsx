import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserRole, isUser, isProduct } from 'external-lib'

const mockUser: any = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  role: UserRole.Admin,
  createdAt: new Date(),
  updatedAt: new Date(),
}

const mockProduct: Product = {
  id: 42,
  name: 'TypeScript Handbook',
  description: 'A comprehensive guide',
  price: 29.99,
  category: 'books',
  inStock: true,
  tags: ['typescript', 'programming'],
}

function App() {
  const [count, setCount] = useState(0)
  const [user] = useState<UserSummary>({ id: mockUser.id, name: mockUser.name, email: mockUser.email })
  const [preview] = useState<ProductPreview>({ id: mockProduct.id, name: mockProduct.name, price: mockProduct.price, inStock: mockProduct.inStock })

  const response: ApiResponse<UserSummary> = {
    data: user,
    status: 200,
    message: 'OK',
    success: true,
  }

  const paged: PaginatedResponse<ProductPreview> = {
    data: [preview],
    status: 200,
    message: 'OK',
    success: true,
    page: 1,
    pageSize: 10,
    totalPages: 1,
    totalItems: 1,
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + external-lib</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>User: {response.data.name} ({isUser(mockUser) ? 'valid' : 'invalid'})</p>
        <p>Product: {paged.data[0]?.name} ({isProduct(mockProduct) ? 'valid' : 'invalid'})</p>
      </div>
    </>
  )
}

export default App
