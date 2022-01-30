let nama = `asdf`;
let peran = `ksatria`;

if (nama === ``) {
    console.log(`nama harus diisi`);
} else {

    if (nama !== `` && peran === ``) {
        console.log(`halo ${nama}, pilih peranmu untuk memulai game ini !`)
    }

    if(nama !== `` && peran === 'ksatria'){
        console.log(`Selamat datang di dunia proxytia !`)
        console.log(`Hallo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu !`)
    }

    if(nama !== `` && peran === 'tabib'){
        console.log(`Selamat datang di dunia proxytia !`)
        console.log(`Hallo ${peran} ${nama}, kamu dapat membantu temanmu yang terluka !`)
    }

    if(nama !== `` && peran === 'penyihir'){
        console.log(`Selamat datang di dunia proxytia !`)
        console.log(`Hallo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu !`)
    }
}