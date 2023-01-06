<script>
  import UpgCats from "./UpgCats.svelte";
  import UpgWork from "./UpgWork.svelte";
  import UpgUnit from "./UpgUnit.svelte";
  import { _clicker } from "./store";
  let money = 0;
  let moneyup = 1;
  let msec = 0;
  let upcost = 15;
  let catcost = 25;
  let workercost = 250;
  let upown = 0;
  let catown = 0;
  let workerown = 0;
  let catadd = 1;
  let workadd = 15;
  let cboost = 1;
  let wboost = 1;
  let catmax = 0;
  let workmax = 0;

  const setDaten = () => {
    money = $_clicker.money;
    moneyup = $_clicker.moneyup;
    msec = $_clicker.msec;
    upcost = $_clicker.upcost;
    catcost = $_clicker.catcost;
    workercost = $_clicker.workercost;
    upown = $_clicker.upown;
    catown = $_clicker.catown;
    workerown = $_clicker.workerown;
    catadd = $_clicker.catadd;
    workadd = $_clicker.workadd;
    cboost = $_clicker.cboost;
    wboost = $_clicker.wboost;
    catmax = $_clicker.catmax;
    workmax = $_clicker.workmax;
  };

  const doUpdate = () => {
    $_clicker = {
      money: money,
      moneyup: moneyup,
      msec: msec,
      upcost: upcost,
      catcost: catcost,
      workercost: workercost,
      upown: upown,
      catown: catown,
      workerown: workerown,
      catadd: catadd,
      workadd: workadd,
      cboost: cboost,
      wboost: wboost,
      catmax: catmax,
      workmax: workmax,
    };
  };

  const upgrade = (name) => {
    setDaten();
    if (name == "clicker cat") {
      if (money >= catcost && catown < 50) {
        if (catown <= 13) {
          msec += catadd;
          catadd++;
          cboost = 1;
        } else if (catown == 14) {
          msec += catadd;
          catadd++;
          cboost = 200;
        } else if (catown <= 23) {
          msec += 200 * catadd;
          catadd++;
          cboost = 200;
        } else if (catown == 24) {
          msec += 200 * catadd;
          catadd++;
          cboost = 5000;
        } else if (catown <= 48) {
          msec += 5000 * catadd;
          catadd++;
          cboost = 5000;
        } else if (catown == 49) {
          msec += 5000 * catadd;
          catadd++;
          cboost = 15000;
        } else {
          msec += 15000 * catadd;
          catadd++;
          cboost = 15000;
        }
        catown += 1;
        money -= catcost;
        catcost = catcost * 2;
      } else if (catown == 50) {
        console.log("Maximal  Count");
      }
    }

    if (name == "worker") {
      if (money >= workercost && workerown < 50) {
        if (workerown <= 13) {
          msec += workadd;
          workadd++;
          wboost = 1;
        } else if (workerown == 14) {
          msec += workadd;
          workadd++;
          wboost = 200;
        } else if (workerown <= 23) {
          msec += 200 * workadd;
          workadd++;
          wboost = 200;
        } else if (workerown == 24) {
          msec += 200 * workadd;
          workadd++;
          wboost = 5000;
        } else if (workerown <= 48) {
          msec += 5000 * workadd;
          workadd++;
          wboost = 5000;
        } else if (workerown == 49) {
          msec += 5000 * workadd;
          workadd++;
          wboost = 15000;
        } else {
          msec += 15000 * workadd;
          workadd++;
          wboost = 15000;
        }
        workerown += 1;
        money -= workercost;
        workercost = workercost * 3;
      } else if (workerown == 50) {
        console.log("Worker Max");
      }
    }

    if (name == "upgrade") {
      if (money >= upcost) {
        moneyup += upcost / 15;
        money -= upcost;
        upown += 1;
        upcost = upcost * 5;

        if (catown == 50) {
          msec -= catmax;
          catmax = Math.floor(moneyup * 0.15);
          msec += catmax;
        }
        if (workerown == 50) {
          msec -= workmax;
          workmax = Math.floor(moneyup * 0.35);
          msec += workmax;
        }
      }
    }

    doUpdate();
  };
</script>

<div class="list">
  <UpgUnit {upgrade} {setDaten} />

  <UpgCats {upgrade} {setDaten} />

  <UpgWork {upgrade} {setDaten} />
</div>
