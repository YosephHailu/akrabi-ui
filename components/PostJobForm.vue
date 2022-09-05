<template>
  <div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
          Address
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="address" type="text" placeholder="Select address">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="job category">
          Job category
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="job_category" type="text" placeholder="job category">
        <option value="">Select job category</option>
        <option value="electrician">Electrician</option>
      </select>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="employment type">
          Employment type
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="job_category" type="text" placeholder="employment type">
        <option value="">Select employment type</option>
        <option value="full time">Full time</option>
      </select>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
    </form>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The closest talent</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2 text-center">
      <span class="inline-block bg-blue-500 mx-auto rounded-full px-3 py-2 text-sm font-semibold text-gray-200 mr-2 mb-2">SUBMIT</span>
    </div>
  </div>
</template>
