<script lang="ts">
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import Create from './Create.svelte';
    import FileManager from './FileManager.svelte';
    import type { NavBarLink } from '../types/NavBarLink';
</script>

<div class="h-100">
  <div class="text-center"> 
    <h2>NFC Create Mode</h2>
  </div>
  <div class="container pt-1 mt-1 h-100">
    <div class="row justify-content-center h-100">
      <div class="col-md-12 col-lg-12">
        <Create></Create>
      </div>
    </div>
  </div>
</div>
