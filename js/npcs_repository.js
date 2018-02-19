import npcs from './db/npcs';
import NPC from './npc';

export default class MonsterRepository {
//   static find(id) {
//     let npcs = npcs.find(function(npcData) {
//       if (npcData.id == id) {
//         return npcData;
//       }
//     });

//     return new NPC(monster);
//   }

  static getByMap(map) {

    console.log(npcs[map]);

    let npcsOnMap = npcs[map].map(function(npcData) {
        console.log(npcData)
        return new NPC(npcData);
    });

    return npcsOnMap || [];
    //return [];
  }


}
