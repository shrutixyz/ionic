## Ionic: Igniting Collaborative Science Experiments 🧪🔬

## Inspiration 🌟
![Rectangle_271](https://i.ibb.co/NpRTt2V/Rectangle-27-1.png)


![Inspiration Image](insert_link_to_image_here)

Science has always been a collaborative endeavor, where ideas are born through shared curiosity and experimentation. The inspiration behind Ionic is to bring the thrill of scientific discovery to the digital realm, fostering collaboration and enabling users to perform experiments together, regardless of physical distance. 🌍🔍
Ably provides really cool methods to bring collaborative experiences and realtime data, which urged us to utilise the features and create ionic!

## What It Does 🚀
![Rectangle_271](https://i.ibb.co/NpRTt2V/Rectangle-27-1.png)

![Ionic in Action](insert_link_to_animated_GIF_here)

Ionic is a groundbreaking app that utilizes the power of the Ably SDKs to allow users to perform real-time, synchronized science experiments. From conducting chemistry experiments to exploring physics phenomena, users can seamlessly collaborate with their peers in a virtual lab environment. Ionic empowers scientists, educators, and students to connect, experiment, and learn together like never before. 📊👩‍🔬
The app is focused for growing kids at this moment, with the experiments being of beginner level. 

We wanted to check out if creating a learning experience like this would be possible, and we're happy that the end results look pretty good! The budding students can join the rooms and then start doing the practicals. They'll be able to read through the documentation to understand the aim of the experiment, and also how to achieve it. Different experiments utilises different features of Ably, based on the context of that specific experiment. The students can also chat with each other and discuss upon the requirements of the experiment and their learning bits. This gamifed version of learning is definitely a boost for kids to learn better and in a much enjoyable manner!

## How We Built It 🛠️
![Rectangle_271](https://i.ibb.co/NpRTt2V/Rectangle-27-1.png)

![Development Workflow Flowchart](insert_link_to_flowchart_here)

**Ionic was crafted using the following major technologies:**
- **React.js**: We used react for creating our web application.
- **Ably SDKs**: SDKs provided by Ably are being utilised for almost every functionality, including live cursors, input fields locking, live avatars and live chats.
- **Figma**: For creating the User Interface prior the development phase of ionic.

Our development process was a harmonious blend of creativity, innovation, and teamwork. The real-time aspect was achieved by leveraging the Ably APIs, enabling users to witness and contribute to each other's experiments in real time. 💡👨‍💻

A detailed description of what feature is used where is given below:
- **Live Chat**: Live chat is present in all the experiments, unique to their room names. The room names could be custom, and if the user doesn't decide to type out a room name themselves, then we create one with random words ourselves. For messaging, useChannel hook is used.
- **Live Avatars**: We show avatars of all the members inside a common room performing experiments. This is crucial to let everyone know who and how many people are there. This is achieved by Ably Spaces.
- **Live Cursors**: Live cursors are available on our "Experiment 1: Exploring Colour Theroy" since we want the members to know the position of the cursor of other users performing the experiment. This is achieved using cursor methods inside Ably Spaces itself!
- **Component Locking**: This feature is present in three experiments: "Experiment 2: Elements Flame Test", "Experiment 3: Convex Lens" and "Experiment 4: Concave Lens", because these experiments requires the users to put input maybe in form of answers as in Experiment 2 or experiment readings as in Experiment 3 and 4. This is achieved using Component Locking methods from Ably Spaces.
- **User Experience**: The assets used are mostly created in Figma, and so is the overall design. The flow of the application is kept simple and understandable. The UI styles are achieved using CSS, and the markup and logic is done using Javascript.
  
## Challenges We Ran Into ⚔️
![Rectangle_271](https://i.ibb.co/NpRTt2V/Rectangle-27-1.png)

Overcoming challenges is part of any journey. And surely, we also faced a bunch of challenges throughout the development of our application. Some of them includes:
- **Integrating multiple features together**: At some points, we wanted to include both locking feature and the live cursor feature into our application. So, we spent quite a while to figure it out and see if it's achievable.
- **Cross-browser compatibility**: Some features were working well with Firefox, but were failing on chrome and vice versa, so achieving a harmony amongst these browser was also a challenge in itself. It was mostly due to minute differences on how offsets and drag movements are calculated in different browsers.
- **Resolving Errors**: As this was our first time experimenting with Ably, there were definitely many errors that we came across. At times, it took us considerable efforts to figure out and rectify the errors.

Through collaboration and perseverance, we conquered these challenges and emerged stronger. 🏆💪

## Accomplishments That We're Proud Of 🎉
![Rectangle_271](https://i.ibb.co/NpRTt2V/Rectangle-27-1.png)

We're thrilled to have achieved several remarkable goals with Ionic:
- **First time creating such an app**: This is the first time we've created any application that involves socket connections and realtime collaborations, so thanks to Ably for that! And quite obviously, this was our first time using Ably SDKs as well. The wrappers on top of web sockets have been really helpful in bringing the app to work.
- **Increased scientific collaboration**: Ionic has the capability to bring together educators and students and let them collaborate and learn in a fun environment.
- **Utilisation and expansion of resources**: We're also proud that we were able to utilise a lot of resources provided by Ably, and the way they all are now essential parts of Ionic. We're also happy that Ionic has a vast range of features which makes it fun and more usable.
- **Custom made hook for locking**: So, while we were trying to integrate the feature of locking for the experiments input fields, we were faced with some errors that was not letting us transmit the edited value through the channel. So we ended up creating that hook's replacement ourselves, and now it also shows if any element is pre-locked while you've just joined the room. We think it's a pretty cool accomplishment as well!

These accomplishments drive us to continue improving and expanding the app's capabilities. 🌍📈

## What We Learned 📚
![Rectangle_271](https://i.ibb.co/NpRTt2V/Rectangle-27-1.png)

![Knowledge Gain](insert_link_to_knowledge_gain_image_here)

Developing Ionic has been a journey of continuous learning. We've gained valuable insights into real-time synchronization, web sockets, collaborative app development, about Ably and its capabilites and user engagement strategies. Our journey has further fueled our passion for making science accessible to all, and making it fun. 🤓🚀

## What's Next for Ionic 🚧
![Rectangle_271](https://i.ibb.co/NpRTt2V/Rectangle-27-1.png)

![Roadmap](insert_link_to_roadmap_image_here)

We actually have a bunch of planned expansions for Ionic. They include:
- **Expanding the experiment library**: Adding more diverse and exciting experiments.
- **Authentication**: Having an optional authentication would make it more secure and privacy focused.
- **Augmented reality integration**: Bringing experiments to life in an immersive AR environment.

**With Ionic, the world of science is at your fingertips. Start your journey of collaborative discovery today! 🌠🌏**
