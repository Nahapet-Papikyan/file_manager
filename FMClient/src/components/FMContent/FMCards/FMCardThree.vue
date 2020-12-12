<template>
  <div class="card-three">
    <div class = "open-card-three p-4" >
      <a href="#" id="closecard"
        @click="toggleCardThree">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="rotate-180 bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
        </svg>
      </a>
    </div>
    <div class="card-three-menu is-flex is-justify-content-center">
      <ul class="is-flex is-justify-content-center">
        <li class="pr-2"><a href="#"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-double-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg></a></li>
        <li class="pr-2"><a href="#"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-bar-contract" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3.646 14.854a.5.5 0 0 0 .708 0L8 11.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-13.708a.5.5 0 0 1 .708 0L8 4.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z"/>
        </svg></a></li>
        <li><a href="#"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-arrow-down-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
        </svg></a></li>
      </ul>
    </div>
    <div class="card-three-content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Ducimus fugiat perspiciatis voluptas ad, non quos?
        Provident mollitia dignissimos voluptatum quis, porro,
        rem harum ipsum id, amet deserunt asperiores soluta explicabo!
    </div>
  </div>
</template>

<script>
export default {

  name: 'FMCartThree',

  inject: ['toggleCardThree']

}
</script>
