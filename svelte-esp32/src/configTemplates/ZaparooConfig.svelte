<script lang="ts">
    import { EspUtils } from "../backend/EspUtils";
    import type { ConfigData } from "../types/ConfigData";
    let config: ConfigData = EspUtils.getBlank();
    EspUtils.config().subscribe(value=> config = value);
    const handleSubmit = (event: Event) => {
      event.preventDefault();
      const update: Partial<ConfigData> = {
        zapIp: config.zapIp, 
        misterEnabled: config.misterEnabled,
        steamIp: config.steamIp,
        steamEnabled: config.steamEnabled,
        resetOnRemove: config.resetOnRemove
      };
        EspUtils.updateConfig(update);
    };
</script>
<div class="text-center">
  <h2>Zaparoo Settings</h2>
</div>
  <form on:submit={handleSubmit} class="row g-2">
  <div class="col-12"> 
    <div class="input-group">
      <div class="input-group-text">
        <div class="form-check form-switch col-2">
          <input class="form-check-input" type="checkbox" role="switch" id="enableMister" bind:checked={config.misterEnabled}/>
          <label class="form-check-label visually-hidden" for="enableMister">Enable Mister</label>
        </div>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control col-6" id="misterIp" placeholder="mister.local" bind:value={config.zapIp} disabled={!config.misterEnabled} />
        <label for="misterIp">Mister Address</label>
      </div>
      <div class="input-group-text">
        <div class="form-check form-switch col-4">
          <input class="form-check-input" type="checkbox" role="switch" id="enableRRoR" bind:checked={config.resetOnRemove} disabled={!config.misterEnabled}/>
          <label class="form-check-label" for="enableRRoR">Reset On Remove</label>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="input-group">
      <div class="input-group-text">
        <div class="form-check form-switch col-2">
          <input class="form-check-input" type="checkbox" role="switch" id="enableSteam" bind:checked={config.steamEnabled}/>
          <label class="form-check-label visually-hidden" for="enableSteam">Enable Steam</label>
        </div>
      </div>
      <div class="form-floating">
        <input type="text" class="form-control" id="steamIp" placeholder="steam.local" bind:value={config.steamIp} disabled={!config.steamEnabled} />
        <label for="steamIp">Steam Address</label>
      </div>
    </div>
  </div>
  <div>
    <div class="input-group">
      <div class="input-group-text">
        <div class="form-check form-switch col-2">
          <input class="form-check-input" type="checkbox" role="switch" id="serialOnly" bind:checked={config.serialOnly}/>
          <label class="form-check-label" for="serialOnly">Serial Only</label>
        </div>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Save</button>
</form>