// ================================================================
//            DONNÉES PARTAGÉES - Forum Jobs d'été
// ================================================================

let standsData = [];

async function loadStandsData() {
  try {
    const resp = await fetch('stands.json');
    const json = await resp.json();
    standsData = json.stands || json;
  } catch (e) {
    console.warn('stands.json non trouvé, données embarquées utilisées');
    standsData = getEmbeddedStands();
  }
  return standsData;
}

function getEmbeddedStands() {
  return [
    { id:"A01", name:"Structure Info Jeunes - Kiosk", zone:"zone-a", sector:"Informations", jobs:"", age:"11-25 ans", description:"" },
    { id:"A02", name:"Mission locale", zone:"zone-a", sector:"Informations", jobs:"", age:"16+", description:"" },
    { id:"A03", name:"Structure Info Jeunes - Kiosk", zone:"zone-a", sector:"Informations", jobs:"", age:"16+", description:"" },
    { id:"A04", name:"Mission locale", zone:"zone-a", sector:"Informations", jobs:"", age:"16+", description:"" },
    { id:"A05", name:"Structure Info Jeunes - Kiosk", zone:"zone-a", sector:"Informations", jobs:"", age:"11-25 ans", description:"" },
    { id:"A06", name:"Mission locale", zone:"zone-a", sector:"Informations", jobs:"", age:"16+", description:"" },
    { id:"B01", name:"Adequat", zone:"zone-b", sector:"Interim", jobs:"Usine, chantier", age:"18+", description:"" },
    { id:"B02", name:"Adequat2", zone:"zone-b", sector:"Interim", jobs:"Usine, chantier", age:"18+", description:"" },
    { id:"B03", name:"Adequat3", zone:"zone-b", sector:"Interim", jobs:"Usine, chantier", age:"18+", description:"" },
    { id:"B04", name:"Adequat4", zone:"zone-b", sector:"Interim", jobs:"Usine, chantier", age:"18+", description:"" },
    { id:"B05", name:"Adequat5", zone:"zone-b", sector:"Interim", jobs:"Usine, chantier", age:"18+", description:"" },
    { id:"B06", name:"Adequat6", zone:"zone-b", sector:"Interim", jobs:"Usine, chantier", age:"18+", description:"" },
    { id:"B07", name:"Adequat7", zone:"zone-b", sector:"Interim", jobs:"Usine, chantier", age:"18+", description:"" },
    { id:"C01", name:"Lecapitaine", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C02", name:"Lecapitaine2", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C03", name:"Lecapitaine3", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C04", name:"Lecapitaine4", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C05", name:"Lecapitaine5", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C06", name:"Lecapitaine6", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C07", name:"Lecapitaine7", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C08", name:"Lecapitaine8", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C09", name:"Lecapitaine9", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C10", name:"Lecapitaine10", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C11", name:"Lecapitaine11", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C12", name:"Lecapitaine12", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C13", name:"Lecapitaine13", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C14", name:"Lecapitaine14", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C15", name:"Lecapitaine15", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C16", name:"Lecapitaine16", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C17", name:"Lecapitaine17", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C18", name:"Lecapitaine18", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C19", name:"Lecapitaine19", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C20", name:"Lecapitaine20", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C21", name:"Lecapitaine21", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C22", name:"Lecapitaine22", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C23", name:"Lecapitaine23", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C24", name:"Lecapitaine24", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C25", name:"Lecapitaine25", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C26", name:"Lecapitaine26", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"C27", name:"Lecapitaine27", zone:"zone-c", sector:"Voiture", jobs:"Carrossier, peintre", age:"18+", description:"" },
    { id:"D01", name:"Affichage offres d'emploi", zone:"zone-d", sector:"Offres", jobs:"Tout type", age:"18+", description:"Retrouvez toutes les offres d'emploi FranceTravail dans le couloir !" },
    { id:"D02", name:"Salle de reunion 1", zone:"zone-d", sector:"", jobs:"", age:"18+", description:"" },
    { id:"D03", name:"Salle de reunion 2", zone:"zone-d", sector:"", jobs:"", age:"18+", description:"" },
    { id:"E01", name:"Toilettes", zone:"zone-e", sector:"", jobs:"", age:"", description:"" }
  ];
}

// Zone info helpers
const ZONES = {
  'zone-a': { name: 'Zone A', label: 'Accueil & Ressources', color: '#8cc63f', hex: 0x8cc63f },
  'zone-b': { name: 'Zone B', label: 'Interim', color: '#29abe2', hex: 0x29abe2 },
  'zone-c': { name: 'Zone C', label: 'Entreprises', color: '#ed1c24', hex: 0xed1c24 },
  'zone-d': { name: 'Zone D', label: 'Autres', color: '#f7931e', hex: 0xf7931e },
  'zone-e': { name: 'Zone E', label: 'Toilettes', color: '#fcee21', hex: 0xfcee21 }
};

function getZoneInfo(zoneId) {
  return ZONES[zoneId] || { name: zoneId, label: '', color: '#ccc', hex: 0xcccccc };
}

function getZoneLabel(zoneId) {
  const z = ZONES[zoneId];
  return z ? z.name : zoneId;
}
