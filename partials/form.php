<form action="/" method="post" class="text-xs">
  <ul>
    <li class="block relative mb-px pt-1/12">
      <input type="text" id="name" name="name" placeholder="John Doe" class="block absolute top-0 left-0 w-full h-full pl-4 pt-4 bg-white/20 peer" />
      <label for="name" class="cursor-pointer block absolute top-0 left-0 px-4 pt-2 font-caps lowercase peer-focus:text-yellow">Name:</label>
    </li>

    <li class="block relative mb-px pt-1/12">
      <input type="email" id="email" name="email" placeholder="Your email address" class="block absolute top-0 left-0 w-full h-full pl-4 pt-4 bg-white/20 peer" />
      <label for="email" class="cursor-pointer block absolute top-0 left-0 px-4 pt-2 font-caps lowercase peer-focus:text-yellow">Email:</label>
    </li>

    <li class="block relative mb-1/24 pt-1/2">
      <textarea id="msg" name="message" placeholder="E.g. 'I love your work!'" class="block absolute top-0 left-0 w-full h-full pl-4 pt-8 bg-white/20 peer"></textarea>
      <label for="msg" class="cursor-pointer block absolute top-0 left-0 px-4 pt-2 font-caps lowercase peer-focus:text-yellow">Message:</label>
    </li>

    <li class="block relative text-center">
      <button type="submit" class="inline-flex justify-center items-center min-w-40 h-16 ml-auto mr-auto px-8 text-base font-caps text-white lowercase bg-pink">Send Message</button>
    </li>
  </ul>
</form>