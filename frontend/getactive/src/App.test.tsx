// src/App.test.jsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);
    
    // 检查初始计数值
    expect(screen.getByText('count is 0')).toBeInTheDocument();
    
    // 点击按钮
    fireEvent.click(screen.getByText('count is 0'));
    
    // 检查计数值是否增加
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });
});

describe('API 测试', () => {
    it('应该从后端获取数据', async () => {
      const response = await axios.get('http://localhost:8080/api/health')
      expect(response.status).toBe(200);
    });
});
