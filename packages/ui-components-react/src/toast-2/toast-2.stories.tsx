import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast, ToastContainer, useToast } from './toast-2';
import type { ToastPosition, ToastType } from './toast-2';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast2',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning', 'info'],
    },
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = ({ position = 'top-right' }: { position?: ToastPosition }) => {
  const { toasts, addToast, removeToast, success, error, warning, info } = useToast();

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button onClick={() => success('Success message!', 'Success')}>
          Success Toast
        </button>
        <button onClick={() => error('Error message!', 'Error')}>
          Error Toast
        </button>
        <button onClick={() => warning('Warning message!', 'Warning')}>
          Warning Toast
        </button>
        <button onClick={() => info('Info message!', 'Info')}>
          Info Toast
        </button>
        <button onClick={() => addToast({ message: 'Default message!', title: 'Default' })}>
          Default Toast
        </button>
      </div>
      
      <ToastContainer toasts={toasts} position={position} onClose={removeToast} />
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const TopRight: Story = {
  render: () => <ToastDemo position="top-right" />,
};

export const TopLeft: Story = {
  render: () => <ToastDemo position="top-left" />,
};

export const BottomRight: Story = {
  render: () => <ToastDemo position="bottom-right" />,
};

export const BottomLeft: Story = {
  render: () => <ToastDemo position="bottom-left" />,
};

export const TopCenter: Story = {
  render: () => <ToastDemo position="top-center" />,
};

export const BottomCenter: Story = {
  render: () => <ToastDemo position="bottom-center" />,
};

export const SingleToast: Story = {
  render: () => {
    const [showToast, setShowToast] = useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <button onClick={() => setShowToast(true)}>Show Toast</button>
        
        {showToast && (
          <ToastContainer
            toasts={[{
              id: '1',
              title: 'Success',
              message: 'This is a success message!',
              type: 'success',
            }]}
            position="top-right"
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    );
  },
};

export const WithoutCloseButton: Story = {
  render: () => {
    const [showToast, setShowToast] = useState(false);
    
    return (
      <div style={{ padding: '2rem' }}>
        <button onClick={() => setShowToast(true)}>Show Toast</button>
        
        {showToast && (
          <ToastContainer
            toasts={[{
              id: '1',
              title: 'Auto-dismiss',
              message: 'This toast will auto-dismiss in 3 seconds',
              type: 'info',
              duration: 3000,
              showCloseButton: false,
            }]}
            position="top-right"
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    );
  },
}; 