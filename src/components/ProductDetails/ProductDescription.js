'use client'
import React, { useState } from 'react';

const ProductDescription = () => {
    const [selectedTab, setSelectedTab] = useState('desc');

    const tabs = [
        { id: 'desc', label: 'Description' },
        { id: 'info', label: 'Additional Information' },
        { id: 'reviews', label: 'Reviews' }
    ];

    return (
        <div className='p-4'>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex justify-center -mb-px">
                    {tabs.map(tab => (
                        <li
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`me-2 cursor-pointer inline-block p-4 border-b-2 rounded-t-lg ${selectedTab === tab.id
                                ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
                                : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                                }`}
                        >
                            {tab.label}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                {selectedTab === 'desc' &&
                    <div className='py-5 min-h-40'>
                        <p>কাঠগোলাপ দেশের ছোট-বড় সবার কাছে পরিচিত ফুল। পাতা আকারে বেশ বড় ও পুরু। শিরা-উপশিরা স্পষ্ট। কাণ্ডের ডগায় একগুচ্ছ ফুল অন্যরকম সৌন্দর্য নিয়ে চুপটি করে বসে থাকে। ফুটন্ত ফুলের সুঘ্রাণে চারপাশ মৌ মৌ করে। ফুলের আকার মাঝারি। পাঁচটি পাপড়ি থাকে। ফুলের অন্যতম বৈশিষ্ট্য হল কোনো কোনো ফুল দুধের মতো সাদা, কোনোটি সাদা পাপড়ির ওপর হলুদ দাগ, আবার কোনোটি লালচে গোলাপি রঙের। আবার সাদা রঙের কিছু ফুল দীর্ঘ মঞ্জুরিদণ্ডের আগায় ঝুলে থাকে। প্রায় সারা বছর ফুল ফুটলেও গ্রীষ্ম, বর্ষা ও শরতে বেশি ফুল ফোটে। কাঠগোলাপের ভালো গাছ অর্ডার করতে আমাদেরকে ম্যাসেজ করুন অথবা ভিসিট করুন</p>
                    </div>
                }
                {selectedTab === 'info' && <div className='min-h-40'>Additional information right now empty</div>}
                {selectedTab === 'reviews' && <div className='min-h-40'>Reviews : 0</div>}
            </div>

        </div >
    );
};

export default ProductDescription;