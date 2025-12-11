'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VisualProofModule from './VisualProofModule';
import VoiceHealthModule from './VoiceHealthModule';
import NFTRevealCard from './NFTRevealCard'; // 新しいカードをインポート

type Step = 'intro' | 'visual' | 'voice' | 'minting' | 'success';

const ClaimRewardFlow = () => {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [proofData, setProofData] = useState<any>({});
  
  const handleVisualSuccess = () => {
    setCurrentStep('voice');
  };

  const handleVoiceSuccess = (healthData: any) => {
    setProofData((prev: any) => ({ ...prev, ...healthData }));
    setCurrentStep('minting');
    simulateMinting();
  };

  const simulateMinting = () => {
    // Minting Simulation
    setTimeout(() => {
      setCurrentStep('success');
    }, 4000); 
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-[600px] bg-black/40 border border-[#333] rounded-3xl p-8 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* 背景装飾 */}
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-[#C89F53]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <AnimatePresence mode='wait'>
        
        {/* STEP 0: INTRO */}
        {currentStep === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center w-full text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-serif">Founding Member Reward</h2>
            <p className="text-gray-400 max-w-lg mb-12 leading-relaxed">
              Gold Member限定のオーナーNFT（Proof-of-Care Token）を請求します。<br/>
              請求には、あなたが「今、ここに生きていること」の証明が必要です。
            </p>
            
            <div className="flex gap-6 text-xs text-gray-500 mb-12 tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center bg-gray-900">1</span>
                <span>Visual</span>
              </div>
              <div className="w-12 h-[1px] bg-gray-800"></div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center bg-gray-900">2</span>
                <span>Vital</span>
              </div>
              <div className="w-12 h-[1px] bg-gray-800"></div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center bg-gray-900">3</span>
                <span>Mint</span>
              </div>
            </div>

            <button 
              onClick={() => setCurrentStep('visual')}
              className="px-12 py-4 bg-gradient-to-r from-[#C89F53] to-[#8E6E32] text-black font-bold rounded-full text-lg shadow-[0_0_30px_rgba(200,159,83,0.3)] hover:scale-105 transition-transform hover:shadow-[0_0_50px_rgba(200,159,83,0.5)]"
            >
              START CLAIM PROCESS
            </button>
          </motion.div>
        )}

        {/* STEP 1: VISUAL PROOF */}
        {currentStep === 'visual' && (
          <motion.div
            key="visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full"
          >
            <VisualProofModule onSuccess={handleVisualSuccess} />
          </motion.div>
        )}

        {/* STEP 2: VOICE PROOF */}
        {currentStep === 'voice' && (
          <motion.div
            key="voice"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full"
          >
            <VoiceHealthModule onAnalysisComplete={handleVoiceSuccess} />
          </motion.div>
        )}

        {/* STEP 3: MINTING */}
        {currentStep === 'minting' && (
          <motion.div
            key="minting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="relative w-40 h-40 mb-10">
              <motion.div 
                className="absolute inset-0 border-[1px] border-[#C89F53] rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute inset-0 border-t-2 border-[#C89F53] rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 border-r-2 border-white rounded-full opacity-50"
                animate={{ rotate: -180 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <h3 className="text-2xl text-white font-bold mb-2 tracking-wider">MINTING IN PROGRESS</h3>
            <p className="text-gray-400 animate-pulse font-mono text-sm">
              Writing Proof-of-Care to Blockchain...
            </p>
          </motion.div>
        )}

        {/* STEP 4: SUCCESS (New NFT Card) */}
        {currentStep === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="mb-10">
              {/* ここで新しいNFTカードを表示 */}
              <NFTRevealCard />
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C89F53] via-white to-[#C89F53] mb-4 filter drop-shadow-lg font-serif">
                Reward Claimed
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed text-sm">
                あなたの優しさと存在は、永遠の価値として証明されました。<br/>
                SOLUNAの共同創業者として歓迎します。
              </p>

              <button className="px-10 py-3 border border-[#C89F53] text-[#C89F53] rounded-full hover:bg-[#C89F53] hover:text-black transition-all duration-300 font-bold tracking-wider text-sm">
                ENTER DASHBOARD
              </button>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default ClaimRewardFlow;