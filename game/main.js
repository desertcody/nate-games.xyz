document.addEventListener("DOMContentLoaded", function () {
    const queryString = window.location.search.substring(1);

    const pageMappings = {
        "1v1.lol": "/0/g/1v1lol/",
        "1v1.lol-method-2": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/edit@main/d3hjf73j2e92ge4y.xml",
        "justfall.lol": "/0/g/just-fall/",
        "cluster-rush": "/0/g/cluster-rush/",
        "1": "/0/g/1/",
        "2048": "/0/g/2048/",
        "wings.io": "http://wings.io",
        "roblox": "/0/g/Roblox/",
        "gacha-club": "/0/g/gacha-club/",
        "papas-burgeria": "/0/g/papas-burgeria/",
        "papas-doggeria": "/0/g/papas-doggeria/",
        "doge-miner": "/0/g/doge-miner/",
        "papas-pancakeria": "/0/g/papas-pancakeria/",
        "papas-scooperia": "/0/g/papas-scooperia/",
        "repuls.io": "/0/g/repuls/",
        "flash-sonic": "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fultimate-flash-sonic.xml",
        "sonic-revert": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@e9968afeca44cc43b16d23cd23af95e6a4e23887/ks85nc4/Sonic_Revert.xml",
        "subway-surfers": "https://da211f97-3b87-4f53-9b9f-34d3fbc5d016.id.repl.co",
        "electricman": "/0/g/electricman/",
        "tooncup": "https://emea.iframed.cn.dmti.cloud/content/691/toon-cup/game/uk/en.e0732106/index.html", // Very likely to be blocked
        "pvz-ds": "https://www.greenfoot.org/scenarios/31337?embed=true",
        "basketball-random": "https://tylerpalko.github.io/gamehub/basketrandom/", // IF BLOCKED: https://github.com/TylerPalko/gamehub/tree/main/basketrandom
        "jelly-mario": "/0/g/jellymario/",
        "2048-multitask": "/0/g/2048-multitask/",
        "game-inside-a-game": "/0/g/giag/",
        "tanuki-sunset": "/0/g/tanuki-sunset/",
        "bottle-flip-3d": "/0/g/bf3d/",
        "tiny-fishing": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://361820596-851580422716946014.preview.editmysite.com/uploads/b/139890129-473108247243760926/files/tf.xml",
        "worlds-hardest-game": "/0/g/whg/1/",
        "worlds-hardest-game-2": "/0/g/whg/2/",
        "worlds-hardest-game-3": "/0/g/whg/3/",
        "dumb-ways-to-die": "https://html5.iclouds.io/dumb-ways-die/?ref", // /0/g/dumb-ways/?ref, https://cdn6.aptoide.com/imgs/8/5/d/85d7dca13a04c6d4cb56fb9f2657fcb8_icon.png
        "geometry-dash": "https://cdn.nate-games.workers.dev/?geometry-dash"
    };

    const filePath = pageMappings[queryString];

    if (filePath) {
        document.getElementById("content").src = filePath;
    }
});