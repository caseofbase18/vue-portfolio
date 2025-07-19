<template>
  <div class="py-16 xl:mx-48 lg:mx-32 md:mx-20 mx-5">
    <h1 class="text-5xl text-gray-50 pb-4 font-semibold text-center py-6">
      Welcome to My Portfolio!
    </h1>
    <p class="text-2xl text-gray-50 font-medium text-center py-6">
      I'm a committed front-end developer with a focus on building responsive,
      user-friendly websites and applications. Specializing in modern front-end
      technologies and content management systems, I’m dedicated to crafting seamless, mobile-first
      designs. Take a look at my work and see how I can bring your ideas to life
      with clean, responsive web design.
    </p>

    <div
      class="flex flex-col items-center md:flex-row md:items-stretch justify-center gap-14 pt-6"
    >
      <!-- Section 1 -->
      <div
        class="text-center w-full max-w-2xl h-auto sm:w-1/2 lg:w-1/2 border rounded border-custom-bg-green p-8 bg-custom-bg-green drop-shadow-xl bg-opacity-90"
      >
        <img
          src="../assets/images/crushing-travel.webp"
          alt="Image of home page for travel blog featuring a person taking a picture of mountains next to a pool."
          class="w-full max-w-[600px] h-auto mb-4 mx-auto rounded drop-shadow-xl"
        />
        <p class="text-white text-base mb-4 font-medium pt-8">
          <span class="font-bold">CrushingTravel.com</span> is a faux travel
          blog created as part of a personal project to enhance my WordPress and
          Elementor skills. The site features an engaging travel-inspired
          layout, designed with the flexibility of the Elementor theme. While
          the content is fictional, it demonstrates a clean, user-friendly
          design and showcases my ability to develop with WordPress. This
          project highlights my growth in web development, particularly in
          customizing WordPress sites with the Elementor page builder for a
          professional, responsive experience.
        </p>
        <a
          href="https://crushingtravel.com/"
          target="_blank"
          class="text-custom-dark-purple text-xl font-extrabold hover:underline hover:underline-offset-2 hover:bg-transparent hover:font-black"
          >CrushingTravel</a
        >
      </div>

      <!-- Section 2 -->
      <div
        class="text-center w-full max-w-2xl h-auto sm:w-1/2 lg:w-1/2 border rounded border-custom-bg-green p-8 bg-custom-bg-green drop-shadow-xl bg-opacity-90"
      >
        <img
          src="../assets/images/draggable-list.webp"
          alt="Image of draggable list with images of various travel destinations and their descriptions."
          class="w-full max-w-[300px] h-auto mb-4 mx-auto rounded drop-shadow-xl"
        />
        <p class="text-white text-base mb-4 font-medium pt-8">
          <span class="font-bold">Draggable List Component</span> is a
          custom-built feature developed using React and Next.js, aimed at
          enhancing my understanding of Next.js and deepening my knowledge of
          React. This interactive component allows users to reorder items
          dynamically through drag-and-drop functionality. The project helped me
          explore advanced React concepts such as state management, event
          handling, and component composition, while also giving me hands-on
          experience with Next.js for building optimized, server-side rendered
          applications.
        </p>
        <a
          href="https://github.com/caseofbase18/draggable-list"
          target="_blank"
          class="text-custom-dark-purple text-xl font-extrabold hover:underline hover:underline-offset-2 hover:bg-transparent hover:font-black"
          >Draggable List Component</a
        >
      </div>
    </div>

    <div
      class="flex flex-col items-center md:flex-row md:items-stretch justify-center gap-14 pt-6"
    >
      <!-- Section 3 -->
      <div
        class="text-center w-full max-w-2xl h-auto sm:w-1/2 lg:w-1/2 border rounded border-custom-bg-green p-8 bg-custom-bg-green drop-shadow-xl bg-opacity-90"
      >
        <img
          src="../assets/images/budget-tracker.webp"
          alt="Image of home page for travel blog featuring a person taking a picture of mountains next to a pool."
          class="w-full max-w-[400px] h-auto mb-4 mx-auto rounded drop-shadow-xl"
        />
        <p class="text-white text-base mb-4 font-medium pt-8">
          The <span class="font-bold">Budget Tracker</span> is a web application
          that helps users efficiently manage and monitor their finances. With
          this app, users can easily enter their transactions and track their
          expenses over time with a dynamic line graph. The app works both
          online and offline, ensuring data is saved locally and synced when
          reconnected to the internet. Built using HTML5, CSS3, JavaScript, and
          backed by Node.js with Mongoose, the app offers a seamless user
          experience, even without an internet connection.
        </p>
        <a
          href="https://github.com/caseofbase18/budget_tracker"
          target="_blank"
          class="text-custom-dark-purple text-xl font-extrabold hover:underline hover:underline-offset-2 hover:bg-transparent hover:font-black"
          >Budget Tracker</a
        >
      </div>

      <!-- Section 4 -->
      <div
        class="text-center w-full max-w-2xl h-auto sm:w-1/2 lg:w-1/2 border rounded border-custom-bg-green p-8 bg-custom-bg-green drop-shadow-xl bg-opacity-90"
      >
        <img
          src="../assets/images/fitness-tracker-dashboard.webp"
          alt="Image of draggable list with images of various travel destinations and their descriptions."
          class="w-full max-w-[600px] h-auto mb-4 mx-auto rounded drop-shadow-xl"
        />
        <p class="text-white text-base mb-4 font-medium pt-8">
          The <span class="font-bold">Workout Tracker</span> is a web
          application designed to help users log and track their daily workouts.
          Users can easily log exercises categorized as Cardio or Resistance.
          For Cardio exercises, users track the distance and duration, while for
          Resistance exercises, they log the weight lifted, sets, reps, and
          duration. Built with Node.js, Express, and MongoDB, this app provides
          a simple and intuitive interface for managing fitness routines.
          Whether you're tracking a run or a weightlifting session, the app
          helps users stay organized and monitor their progress over time.
        </p>
        <a
          href="https://github.com/caseofbase18/fitness_tracker"
          target="_blank"
          class="text-custom-dark-purple text-xl font-extrabold hover:underline hover:underline-offset-2 hover:bg-transparent hover:font-black"
          >Workout Tracker</a
        >
      </div>
    </div>

    <!-- <div
      class="flex flex-col items-center md:flex-row md:items-stretch justify-center gap-14 pt-6"
    >
     
      <div
        class="text-center w-full max-w-2xl h-auto sm:w-1/2 lg:w-1/2 border rounded border-custom-bg-green p-8 bg-custom-bg-green drop-shadow-xl bg-opacity-90"
      >
        <img
          src="../assets/images/budget-tracker.webp"
          alt="Image of home page for travel blog featuring a person taking a picture of mountains next to a pool."
          class="w-full max-w-[400px] h-auto mb-4 mx-auto rounded drop-shadow-xl"
        />
        <p class="text-white text-base mb-4 font-medium pt-8">
          The <span class="font-bold">Budget Tracker</span> is a web application
          that helps users efficiently manage and monitor their finances. With
          this app, users can easily enter their transactions and track their
          expenses over time with a dynamic line graph. The app works both
          online and offline, ensuring data is saved locally and synced when
          reconnected to the internet. Built using HTML5, CSS3, JavaScript, and
          backed by Node.js with Mongoose, the app offers a seamless user
          experience, even without an internet connection.
        </p>
        <a
          href="https://github.com/caseofbase18/budget_tracker"
          target="_blank"
          class="text-custom-dark-purple text-xl font-extrabold hover:underline hover:underline-offset-2 hover:bg-transparent hover:font-black"
          >Budget Tracker</a
        >
      </div>

      
      <div
        class="text-center w-full max-w-2xl h-auto sm:w-1/2 lg:w-1/2 border rounded border-custom-bg-green p-8 bg-custom-bg-green drop-shadow-xl bg-opacity-90"
      >
        <img
          src="../assets/images/fitness-tracker-dashboard.webp"
          alt="Image of draggable list with images of various travel destinations and their descriptions."
          class="w-full max-w-[600px] h-auto mb-4 mx-auto rounded drop-shadow-xl"
        />
        <p class="text-white text-base mb-4 font-medium pt-8">
          The <span class="font-bold">Workout Tracker</span> is a web
          application designed to help users log and track their daily workouts.
          Users can easily log exercises categorized as Cardio or Resistance.
          For Cardio exercises, users track the distance and duration, while for
          Resistance exercises, they log the weight lifted, sets, reps, and
          duration. Built with Node.js, Express, and MongoDB, this app provides
          a simple and intuitive interface for managing fitness routines.
          Whether you're tracking a run or a weightlifting session, the app
          helps users stay organized and monitor their progress over time.
        </p>
        <a
          href="https://github.com/caseofbase18/fitness_tracker"
          target="_blank"
          class="text-custom-dark-purple text-xl font-extrabold hover:underline hover:underline-offset-2 hover:bg-transparent hover:font-black"
          >Workout Tracker</a
        >
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>
