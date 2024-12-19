import prngRandom from './random.js';

const SUN = 0;
const MON = 1;
const TUE = 2;
const WED = 3;
const THU = 4;
const FRI = 5;
const SAT = 6;

const POSTS = [
  {"by":"did:plc:r2p4n5f4zibm76kgwgobpxg7","post":"3kbpwtl4cgh2g","day":MON}, //I think you forgot to set your clock back. Its Monday
  {"by":"did:plc:n6heowum43kppktdogz7ht3o","post":"3kbncgsvuc42y","day":MON}, //*are ** I hate Mondays
  {"by":"did:plc:xux2nvj7ctb4ucltdryonjvn","post":"3kbjl3vxrwp26","day":TUE}, //i shoulda saved this for trash Tuesday
  {"by":"did:plc:ahlsm4d5y3sgwk3mmnj3spgg","post":"3kbjiru23fv2n","day":TUE}, //Lemon it's Tuesday
  {"by":"did:plc:w6sokbegnxs4bc2bfdcvsztr","post":"3kbjhzshvlk2p","day":WED}, //trash tuesday was yesterday yall
  {"by":"did:plc:c7ocgtuam5t56eb72y7d4hnu","post":"3kbjorcityp2y","day":WED}, //Happy Wednesday to everyone!💙💙💙💙🌊🌊🌊🌊
  {"by":"did:plc:jwr44rcxxiburi3pqaorbfqy","post":"3kbjpp2qenb2o","day":WED}, //Tomorrow is thursday again!🍰💚💚💚🧡
  {"by":"did:plc:4sqwgqljavegklkuau5caiu4","post":"3kbjplknpgu2y","day":THU}, //Good morning, angels 👋🏻
  {"by":"did:plc:pyjj4izabep7xpxb2f4kahod","post":"3kbjpe7o2c72o","day":THU}, //Good morning everyone
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3kbi4dg5xek2g","day":FRI}, //well at least it's Friday
  {"by":"did:plc:w3kny76pvkomvdg2u5jwwkzl","post":"3kbotraq4ly2r","day":SAT}, //Morning folks, happy Saturday! I hope you have an amazing weekend.
  {"by":"did:plc:4sisaumtbpmsotveogple4vi","post":"3kbotihlh4s2h","day":SAT}, //Morning everyone hope you have a super Saturday
  {"by":"did:plc:f5a4pirhmyvgct233zvu5see","post":"3kb5ywydgyo2x","day":SUN}, //It’s not even 9 AM on a Sunday and I can’t stop thinking about this meme
  {"by":"did:plc:a25kqnnqd7g4bvahjwz2enkh","post":"3kbpuwlclcj2y","day":SAT}, //I cant believe they would call Jim Jordan an “insurrectionist.” Thats like making the ridiculous claim that today is “Saturday.” www.nbcnews.com/news/amp/rcn...
  {"by":"did:plc:whdxr67wpjzp2h5ihddaebhk","post":"3kb6fb75iwi2e","day":SAT}, //Happy Saturday witches!
  {"by":"did:plc:tx6rqyyihlfxvqs43jegzwkh","post":"3kb6fbvmmi32q","day":SAT}, //It's Saturday
  {"by":"did:plc:ktxyd6zxtwhawqxelgnm4wni","post":"3kbpye5zfv22t","day":SAT}, //Hey y’all, what are you up to on this Saturday? It’s gloomy here in Calgary. 😭 🇨🇦
  {"by":"did:plc:pxnsx3frzu6cuuowkqyzydv3","post":"3kbtkflv5eg2y","day":SUN}, //It’s Sunday night, here’s a photo of Fox
  {"by":"did:plc:a4put3mvd5pvc7id6ssfbqnb","post":"3kbtjgujufw2f","day":SUN}, //it's sunday already? I don't feel relaxed at all from the weekend.
  {"by":"did:plc:xn6v5l3dbtdyl26j7l245xpw","post":"3kbtixdt6gd2e","day":SUN}, //It’s Sunday, y’all. That means you’re gonna crush it this week and I hope for nothing but happy and magical things for you.
  {"by":"did:plc:4ez37horoxc2mvqs7duloc6t","post":"3kbthaw5sda2a","day":SUN}, //I dread Sunday night, as a person who works on Monday morning
  {"by":"did:plc:g7nywl63frmuddq274whiwr6","post":"3kbl73mlt3s26","day":FRI}, //I'm so glad it's Friday
  {"by":"did:plc:7mmqjda2wiuzps7cexdqjw66","post":"3kbw5yruvei2t","day":MON}, //tomorrow is tuesday
  {"by":"did:plc:oqbijttmayqui2xv3e2xwcdz","post":"3kd5fihn43t27","day":WED}, //wizard wednesday
  {"by":"did:plc:vzgxukfxw4omo36mlyym6ho5","post":"3kek3rhjcj322","day":SUN}, //Enjoy your Sunday morning
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3ki7e5f4nqw25","day":FRI}, //thank goodness it's friday
  {"by":"did:plc:2h5yo2dhkdo6r3tokotdqu3v","post":"3ki4n3un3st2m","day":WED}, //AT LEAST I MADE IT TO WEDNESDAY
  {"by":"did:plc:tkzswasvcchz3ou4yvz72h5q","post":"3kk4zwucyiw2j","day":MON}, //Sorry to start your Monday on a bad note. Brace for impact.
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3kkh6yfz7es2c","day":FRI}, //fridays are work days?
  {"by":"did:plc:i6ocendj65mmddfndihajsky","post":"3kki4sujtgc2f","day":SAT}, //It's the weekend, baby
  {"by":"did:plc:i6ocendj65mmddfndihajsky","post":"3kki4sujtgc2f","day":SUN}, //It's the weekend, baby
  {"by":"did:plc:llyvrdjsnfuycjykeaopusbt","post":"3kl3szizj6s2f","day":SAT}, //Hey I’m just a person in the corner saying remember it’s Saturday
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3kn2qsdt4gc2k","day":THU}, //if we try hard enough, tomorrow could be friday
  {"by":"did:plc:6hit5rjdbmlnscmuk4bbtmuc","post":"3knu33w2qv32g","day":SAT}, // please note that I made this post on Saturday afternoon  make of that what you will
  {"by":"did:plc:llyvrdjsnfuycjykeaopusbt","post":"3ko6crgzlhe2a","day":WED}, // Jerry it’s wednesdayy
  {"by":"did:plc:qvzn322kmcvd7xtnips5xaun","post":"3kotkao3f432t","day":FRI}, // It's Friday? Good.
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3kxyucgipof2q","day":THU}, // going to bed thinking it's thursday, for temporary morale
  {"by":"did:plc:o7xt7svg2xtjbb4e2xqahqqc","post":"3kxnldyrihd2m","day":WED}, // img: its wednesday my dude
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3kv4p6l2o7e2t","day":MON}, // img: MONDAY
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3kx27vavgco2p","day":THU}, // It's Thursday, and you know what that means
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3kuq2sbmkd62a","day":FRI}, // img: FRIDAY
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3kudjlhtgwq2x","day":FRI}, // we made it, friday friends
  {"by":"did:plc:vzgxukfxw4omo36mlyym6ho5","post":"3l2fhhv64qn2f","day":FRI}, // Hearing a rumour that it’s Friday, hope this is true
  {"by":"did:plc:qvzn322kmcvd7xtnips5xaun","post":"3l2a2loio2223","day":WED}, // Oh, I see, so this is how you're gonna be, Wednesday
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3kzu7cgy4i42o","day":FRI}, // be advised, it friday. party hats on.
  {"by":"did:plc:qvzn322kmcvd7xtnips5xaun","post":"3kzmrinlzyf2v","day":THU}, // Been sleeping so long I woke up with a caffeine withdrawal headache, how is your Thursday
  {"by":"did:plc:otjqtwtgkoijkucppmxiq5fy","post":"3kz3eslavys2w","day":TUE}, // I regret to inform you it is only Tuesday my dude
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3l3ar26belg2s","day":TUE}, // it's tuesday, lemon
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3l37mptu57427","day":MON}, // ⓘ User thinks tomorrow is Monday
  {"by":"did:plc:jdh2r4q3hxat3a7cdmjpfndh","post":"3l2msddqbzz2u","day":MON}, // Mondays, the transition from leisure to dread.
  {"by":"did:plc:w2vftbw2lqfjj3wdn3x4xhra","post":"3kzpilkldhy26","day":WED}, // Wait it's WEDNESDAY? I could've sworn today was Tuesday.
  {"by":"did:plc:7dc2ec7iadso4vahsndlpofu","post":"3lba5dtgo6c2o","day":MON}, // me: “time to get up, it’s Monday”
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3l557cznv4o2m","day":FRI}, // happy friday to everyone especially to this polish sausage and sauerkraut kolache
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3l3dfoohjs626","day":WED}, // relax, i'm kidding. tuesday was yesterday
  {"by":"did:plc:2darfo36xds4oznvip7x2ux7","post":"3kps7xo4yqt22","day":WED}, // “It is only Wednesday?”
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3kqshwmxmcs27","day":FRI}, // happy friday all
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3ksklttacl222","day":FRI}, // at least it's friday
  {"by":"did:plc:vc7f4oafdgxsihk4cry2xpze","post":"3krwxsgggbd2s","day":THU}, // thank goodness tomorrow's friday
  {"by":"did:plc:ragtjsm2j2vknwkz3zp4oxrd","post":"3ldjgrf2k7s2b","day":WED}, // Only on Wednesdays, if you're lucky
  //{"by":"","post":"","day":}, //
];

export default POSTS;

function getNow() {
    const inLocaleStr = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
    return new Date(inLocaleStr);
}

function getPostsFor(date) {
    const day = date.getDay();
    return POSTS.filter(post => post.day == day);
}

function getPostFor(date) {
    const posts = getPostsFor(date);
    if (posts.length == 0) {
        return [];
    }
    if (posts.length == 1) {
        return posts;
    }
    const dateSeed = date.getYear()*10000+date.getMonth()*100+date.getDate();
    const prng = prngRandom(dateSeed);
    return [posts[Math.floor(prng() * posts.length)]];
}

export function getPostForNow() {
    return getPostFor(getNow());
}
