import React, { SetStateAction, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type } from 'os';

export type MessagePopupType = {
  setHideAction: React.Dispatch<
    SetStateAction<{
      visible: boolean;
      message: string;
      type: string;
    }>
  >;
  visible: boolean;
  message?: string;
  type: string;
};

const MessagePopup = ({
  setHideAction,
  visible,
  message,
  type,
}: MessagePopupType) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (visible) {
      timeoutId = setTimeout(() => {
        setHideAction({ visible: false, message: '', type: '' });
      }, 3000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible, setHideAction]);
  const textColorType =
    type === 'error' ? 'text-red-400' : 'text-[var(--mainColor)]';
  const loaderColorType =
    type === 'error' ? 'bg-red-400' : 'bg-[var(--mainColor)]';
  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className={`absolute  mt-10  right-1/2 translate-x-1/2 shadow-xl py-5 px-10 rounded-md ${textColorType} bg-white z-[999] w-[90%] lg:w-auto text-center`}
            initial={{ opacity: 0, y: -100, x: '50%' }}
            animate={{ opacity: 1, y: -0, x: '50%' }}
            exit={{ opacity: 0, y: -100, x: '50%' }}>
            {message}
            <motion.div
              className={`h-[3px] left-[0.125rem] w-full ${loaderColorType} bottom-[0.2rem] absolute rounded-xl `}
              initial={{ width: '0%' }}
              animate={{ width: '98%' }}
              transition={{ duration: 3 }}
            />
          </motion.div>
          {type !== 'error' && (
            <motion.div
              className='fixed top-0 left-0 bg-black/20 w-full h-[100vh]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default MessagePopup;
