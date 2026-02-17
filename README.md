 Create a README file to answer the following questions-


#### 1) What is the difference between `null` and `undefined`?
Answer: null এবং undefined দুটাই মিনিংফুল value এর অনুপস্থিত বোঝাই। তবে তাদের মধ্যে নিজস্ব কিছু ভিন্নতা রয়েছে । 
        যেমন ঃ 
        undefined বলতে সাধারণত কোন একটা ভ্যালু declar করা হইছে কিন্তু মান দেওয়া হয়নি। JavaScript by default মান undefined দিয়েছে । কিন্তু Null এর ক্ষেত্রে প্রোগ্রামের নিজের কোড লেখার সুবিধার জন্য Null সেট করে দেয়। প্রোগ্রামার নিজেই বোঝাই এখানে কোন value নাই । অর্থাৎ empty । 

        Null er typeof হয় object । কিন্তু Undefined এর typeof হয় undefined । 

        Missing function return করলে undefined দেয়। Null দ্বারা ইচ্ছাকৃতভাবে no value বোঝাই। 



#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
Answer: map() and forEach() দুটাই array methods, তবে দুটার কাজ আলাদা । 
        যেমনঃ 
        forEach() Array এর উপাদান নিয়ে শুধু মাত্র কাজ করে কিন্তু কোনো কিছু return করে না। অন্যদিকে, map()ও array এর উপাদান নিয়ে কাজ করে এবং আগের array কে পরিবর্তন না করে সম্পূর্ণ নতুন array প্রদান করে । 

        map() array এর উপাদান ভিন্নও ভাবে modify করে । forEach সাইডএফেক্ট এর মধ্যে কাজ করে

        map() chainable  কিন্তু forEach chainable না । 

        যদি কোন কারনে map() এর রেজাল্ট undefined হয়, তাহলে সেটা undefined এর একটা অ্যারে রিটার্ন করে
        [undefined, undefined, undefined] । 



#### 3) What is the difference between `==` and `===`?
Answer: '==' শুধুমাত্র দুইটা variable এর value চেক করে কিন্তু type চেক করে না। '==='  variable এর type এবং value 
        দুটাই চেক করে। mordant javaScript এ '===' ব্যবহার করাকেই recommended করে থাকে । যদি আমরা '==' ব্যবহার করি তা হলে সেটা এক টা bug হয়ে যাই। 


#### 4) What is the significance of `async`/`await` in fetching API data?
Answer: API fetching এর জন্য .then .then পদ্ধতি ও ব্যবহার করা হয় । তবে কোড কে আর cleaner এবং smooth করতে  
        `async`/`await` ব্যবহার হয়। এই পদ্ধতিতে কোড ক্লিন এবং রিটাবল হয় Error হ্যান্ডেলিং করতে অনেক সুবিধা হয়, try/catch ব্যবহার করে ।  callback function এর ঝামেলা হয় না এবং কোন কারনে Internet slow থাকলে সেটা await  ভালো ভাবে হ্যান্ডেল করে । 


#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Answer: Scope বলতে কোন variable এর প্রবেশ অধিকার কে বুঝাই। আর্থ, variable কোন function, object, বা নির্দিষ্ট 
        কোন scope (defined by {}) মধ্য থেকে এক্সেস করা যাচ্ছে কিনা সেটা বোঝায়। 

        Global Scope: variable কোন ফাংশন বা ব্লকের বাইরে declar করা হয় এবং সেটা যে কোন জায়গা থেকেই এক্সেস করা যায়। 'var' keyword ব্যবহার করে ভ্যারিয়েবল ডিক্লেয়ার করলে এটা হয়ে থাকে। 

        Function Scop: এক্ষেত্রে শুধুমাত্র ফাংশন এর ভিতরে ভ্যারিয়েবল ডিক্লেয়ার করে ফাংশনের বাইরে থেকে এক্সেস করা যায় না। let and const ব্যবহার করা হয় । 

        Block Scop: একটা নির্দিষ্ট একটা ব্লকের ভিতরে ভেরিয়েবল ডিক্লেয়ার করে সেখানে শুধু ব্যবহার করা হয়। বাইরে থেকেও এই ভেরিয়েবল এক্সেস করা যাবে না। এজন্য let, const ব্যবহার করা হয়। var ব্যবহার করলে ভেরিএবেল hosted হয়ে থাকে। তাই ES6 এ var ব্যবহার না করাই উত্তম ।



Live link: https://swiftcardvanila11.surge.sh/
GitHub link: https://github.com/rabbani37/restart-swift-card