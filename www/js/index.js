var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', function($scope, $mdBottomSheet, $mdSidenav){

	angular.element(document).ready(function () {
		FastClick.attach(document.body);
	});
	
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.menu = [
    {
      link : '#bab1',
      title: 'Tujuan Hidup Manusia',
      icon: '' //'dashboard'
    },
    {
      link : '#bab2',
      title: 'Sumber Kebenaran',
      icon: 'list' //'group'
    },
    {
      link : '#bab3',
      title: 'Berbuat Baik dan Benar',
      icon: ''
    },
    {
      link : '#bab4',
      title: 'Catur Warna / Pekerjaan dan Profesi',
      icon: ''
    },
    {
      link : '#bab5',
      title: 'Tri Kaya Parisudha / Pikiran, Perkataan, dan Perbuatan',
      icon: ''
    },
    {
      link : '#bab6',
      title: 'Manah / Pikiran',
      icon: ''
    },
    {
      link : '#bab7',
      title: 'Irsya / Iri Hati',
      icon: ''
    },
    {
      link : '#bab8',
      title: 'Ksama / Kesabaran',
      icon: ''
    },
    {
      link : '#bab9',
      title: 'Krodha / Amarah',
      icon: ''
    },
    {
      link : '#bab10',
      title: 'Nastika / Tanpa Keyakinan',
      icon: ''
    },
    {
      link : '#bab11',
      title: 'Wacika / Perkataan',
      icon: ''
    },
    {
      link : '#bab12',
      title: 'Satya / Kebenaran',
      icon: ''
    },
    {
      link : '#bab13',
      title: 'Ahimsa / Tidak Menyakiti Mahluk',
      icon: ''
    },
    {
      link : '#bab14',
      title: 'Astenya / Mencuri',
      icon: ''
    },
    {
      link : '#bab15',
      title: 'Paradara / Memperkosa',
      icon: ''
    },
    {
      link : '#bab16',
      title: 'Susila / Kesusilaan',
      icon: ''
    },
    {
      link : '#bab17',
      title: 'Dana Punia / Sedekah',
      icon: ''
    },
    {
      link : '#bab18',
      title: 'Anak, Orang Tua dan Guru',
      icon: ''
    },
    {
      link : '#bab19',
      title: 'Yama Niyama Brata / Pengendalian Diri',
      icon: ''
    },
    {
      link : '#bab20',
      title: 'Artha / Materi',
      icon: ''
    },
    {
      link : '#bab21',
      title: 'Sukha / Kesenangan',
      icon: ''
    },
    {
      link : '#bab22',
      title: 'Tirtha Yatra / Perjalanan ke Tempat Suci',
      icon: ''
    },
    {
      link : '#bab23',
      title: 'Daridra / Kemiskinan',
      icon: ''
    },
    {
      link : '#bab24',
      title: 'Samsarga / Pergaulan',
      icon: ''
    },
    {
      link : '#bab25',
      title: 'Pergaulan dengan Orang yang Berbudi Luhur',
      icon: ''
    },
    {
      link : '#bab26',
      title: 'Pergaulan dengan Penjahat',
      icon: ''
    },
    {
      link : '#bab27',
      title: 'Purwa Karma / Hukum Sebab Akibat',
      icon: ''
    },
    {
      link : '#bab28',
      title: 'Mrtyu - Tuha - Pati / Kematian',
      icon: ''
    },
    {
      link : '#bab29',
      title: 'Pitrayana - Dewayana / Roh Leluhur',
      icon: ''
    },
    {
      link : '#bab30',
      title: 'Punggung / Kebodohan',
      icon: ''
    },
    {
      link : '#bab31',
      title: 'Birahi / Nafsu Seksual',
      icon: ''
    },
    {
      link : '#bab32',
      title: 'Raga - Dwesa / Hawa Nafsu dan Amarah',
      icon: ''
    },
    {
      link : '#bab33',
      title: 'Trsna / Keterikatan',
      icon: ''
    },
    {
      link : '#bab34',
      title: 'Moksa / Pembebasan',
      icon: ''
    }
  ];
  $scope.admin = [
    {
      link : '',
      title: 'Trash',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }
  ];
  $scope.bab1 = [
    {
		sloka: 'Sloka 1',
		ayat: "Anaknda Janamejaya, segala ajaran tentang Catur Warga (Dharma=kebajikan, Artha=kekayaan, Kama=kesenangan dan Moksa=kebebasan) baikpun sumber, maupun uraian tafsirnya ada di sini; segala yang terdapat di sini akan terdapat dalam sastra lain; yang tidak terdapat di sini juga tidak akan terdapat pada sastra lain."
	},
	{
		sloka: 'Sloka 2',
		ayat: "Manusia adalah satu-satunya mahluk yang dapat melakukan kebajikan pun kejahatan. Terlahir menjadi manusia bertujuan untuk melebur perbuatan-perbuatan jahat ke dalam perbuatan-perbuatan bajik, hingga tidak ada lagi perbuatan-perbuatan jahat yang masih tersisa dalam diri, inilah hakekat menjadi manusia. Hanya dengan menjadi manusia kejahatan itu dapat dilebur dalam kebajikan."
	},
	{
		sloka: 'Sloka 3',
		ayat: "Janganlah pernah bersedih hati dilahirkan menjadi manusia, meskipun pada kelahiran yang dianggap paling hina; karena sesungguhnya amat sulit untuk bisa menjelma menjadi manusia. Berbahagialah menjadi manusia."
	},
	{
		sloka: 'Sloka 4',
		ayat: "Menjadi manusia adalah kelahiran yang paling utama. Karena hanya dengan menjadi manusia sajalah kebajikan/kebenaran dapat dilakukan, dan hanya dari kebajikan/kebenaran itulah kesengsaraan dapat dibenahi."
	},
	{
		sloka: 'Sloka 5',
		ayat: "Manusia jahat dianggap sebagai sampah sekaligus penyakit dunia. Sesungguhnya tidak ada kesenangan apapun dalam kejahatan itu. Si jahat selalu merasa kosong dalam setiap perbuatannya, kebahagiaan yang mereka peroleh adalah semu."
	},
	{
		sloka: 'Sloka 6',
		ayat: "Pergunakanlah kesempatan terbaik ini, kesempatan lahir sebagai manusia, kesempatan yang sungguh sulit didapat, kesempatan untuk bisa memasuki alam surga. Lakukanlah hanya perbuatan-perbuatan yang dapat mengantar roh ke surga dan jauhilah perbuatan-pebuatan yang akan mengantar roh ke neraka."
	},
	{
		sloka: 'Sloka 7',
		ayat: "Terlahir sebagai manusia adalah kesempatan untuk melakukan perbuatan bajik dan jahat, yang hasilnya akan dinikmati di akherat. Apapun yang diperbuat dalam kehidupan ini hasilnya akan dinikmati di akherat; setelah menikmati pahala akherat, lahirlah lagi ke bumi. Di akherat tidak ada perbuatan apapun yang berpahala. Sesungguhnya hanya perbuatan di bumi inilah yang paling menentukan."
	},
	{
		sloka: 'Sloka 8',
		ayat: "Kelahiran sebagai manusia sangat pendek dan cepat, bagaikan pijaran cahaya petir, lagi pula kesempatan seperti ini sungguh sulit didapatkan. Oleh karena itu pergunakanlah kesempatan ini sebaik-baiknya, lakukanlah perbuatan-perbuatan bajik/benar yang akan memutus lingkaran dan putaran kesengsaraan lahir dan mati, di mana kebebasan abadi itu bisa diperoleh."
	},
	{
		sloka: 'Sloka 9',
		ayat: "Mereka yang memanfaatkan kelahirannya hanya untuk mengejar kekayaan, kesenangan, nafsu-nafsu kotor dan rakus. Mereka yang tidak melakukan kebajikan di bumi, mereka inilah manusia yang tersesat dan pergi menjauh dari jalan kebenaran."
	},
	{
		sloka: 'Sloka 10',
		ayat: "Mereka yang telah melakukan kebajikan pun kebenaran, namun masih terikat dalam proses lahir dan mati, mereka ini belumlah memperoleh inti sari dari kebebasan."
	},
	{
		sloka: 'Sloka 11',
		ayat: "Lakukanlah pencarian kekayaan dan kesenangan hanya berlandaskan pada kebajikan/kebenaran yang pasti akan mengantar ke surga. Hendaknya janganlah melakukan segala macam kegiatan yang bertentangan dengan kebenaran. Manusia sering melalaikan hakekat kebajikan/kebenaran, sebab bagi mereka sungguh-sungguh sulit untuk dilakukan. Sedangkan kejahatan/ketidakbenaran bagi mereka sangat mudah dilakukan dan pastilah neraka pahalanya."
	},
	{
		sloka: 'Sloka 12',
		ayat: "Jika kekayaan dan kesenangan dicari, lakukanlah kebajikan/kebenaran terlebih dahulu. Jika kebajikan pun kebenaran dilakukan, niscaya kekayaan dan kesenangan pastilah didapatkan. Sungguh tidak akan ada artinya jika kekayaan dan kebenaran yang dicari menyimpang dari kebenaran/kebajikan."
	},
	{
		sloka: 'Sloka 13',
		ayat: "Orang yang bijaksana adalah orang yang senantiasa melakukan kebajikan dan kebenaran. Orang yang tidak bijaksana adalah orang yang memperoleh kekayaan dengan cara tidak benar; pun mereka yang memperoleh kesenangan dengan cara tidak benar. Tentunya mereka yang tidak bijaksana masih memiliki kerakusan, mereka pasti dapat digoda oleh kekayaan dan kesenangan yang jahat."
	},
	{
		sloka: 'Sloka 14',
		ayat: "Kebajikan dan kebenaran itu laksana perahu yang dapat mengantarkan manusia untuk pergi ke surga."
	},
	{
		sloka: 'Sloka 15',
		ayat: "Dalam usaha mencari kekayaan dan kesenangan, seringkali kegagalan yang justru diperoleh. Namun usaha untuk melaksanakan kebajikan dan kebenaran, sudah pasti mendatangkan hasil, walaupun baru dalam angan-angan saja."
	},
	{
		sloka: 'Sloka 16',
		ayat: "Bagaikan terbitnya matahari yang melenyapkan kegelapan dunia, seperti itulah mereka yang senantiasa melakukan kebajikan/kebenaran dalam hidupnya, memusnahkan segala dosa-dosa."
	},
	{
		sloka: 'Sloka 17',
		ayat: "Siapapun juga, baik mereka yang dianggap mulia, berkuasa atau bahkan hina dina, selama ia tekun melakukan kebajikan dan kebenaran, akan tercapailah apa yang menjadi tujuan dan cita-citanya."
	},
	{
		sloka: 'Sloka 18',
		ayat: "Kebajikan dan kebenaran adalah sumber dari mana kebahagiaan itu datang; dan barang siapa melakukan kebajikan/kebenaran, mereka akan senantiasa dilindungi; selebihnya hanya kebajikan/kebenaran sajalah yang dapat melebur segala macam dosa."
	},
	{
		sloka: 'Sloka 19',
		ayat: "Mereka yang tidak bimbang, yang tetap teguh hati dalam melaksanakan kebajikan dan kebenaran, sesungguhnya mereka inilah orang yang hidup dalam kebahagiaan. Meskipun untuk menyambung hidupnya mereka menjadi pengemis, pekerjaan itu tidak akan membuat saudara, kerabat, dan handai tolannya menjadi susah dan bersedih hati."
	},
	{
		sloka: 'Sloka 20',
		ayat: "Bagaikan tanaman tebu kala hujan, tidak hanya tebu itu saja yang memperoleh air, tanaman lain yang berada di dekat tebu itu pun mendapatkan manfaatnya; baik itu rumput, tanaman menjalar dan lain-lain. Demikianlah orang yang tekun dalam kebajikan dan kebenaran, sekaligus akan dicapainya juga kekayaan, kesenangan dan kemasyuran itu."
	},
	{
		sloka: 'Sloka 21',
		ayat: "Mereka yang melakukan kebajikan dan kebenaran, setelah memperoleh surga; kelak apabila dilahirkan kembali ke bumi akan menjelma menjadi orang yang rupawan, gunawan, muliawan dan berkekuasaan; segala macam pahala kebajikan dan kebenaran itu akan diperolehnya."
	},
	{
		sloka: 'Sloka 22',
		ayat: "Mereka yang senantiasa melaksanakan kebajikan dan kebenaran, secara ajaib akan dilindungi dari berbagai macam bahaya. Walaupun ia berada di hutan, di jurang, di semak-semak, bahkan dalam kancah peperangan, di manapun juga tempat-tempat yang mendatangkan bahaya bagi kebanyakan orang, bagi mereka yang tekun degan kebajikan dan kebenaran tidak akan ada tempat berbahaya dan dapat mencelakainya."
	},
	{
		sloka: 'Sloka 23',
		ayat: "Mereka yang senantiasa melakukan kebajikan dan kebenaran akan memperoleh istri yang cantik dan utama, mereka akan mendapatkan rumah mewah, kelimpahan sandang pangan dan juga harta kekayaan."
	},
	{
		sloka: 'Sloka 24',
		ayat: "Bagaikan katak yang datang sendiri ke kubangan air, bagaikan burung yang akan selalu datang ke telaga, demikianlah harta kekayaan dan kesenangan itu akan datang sendiri menghampiri mereka yang teguh dengan kebajikan dan kebenaran."
	},
	{
		sloka: 'Sloka 25',
		ayat: "Orang boleh bersantai dalam mencari harta dan kesenangan, namun dalam mengamalkan kebajikan dan kebenaran, hendaknya manusia selalu berpikir bahwa kematian akan datang esok hari, hingga hilanglah kemalasannya."
	},
	{
		sloka: 'Sloka 26',
		ayat: "Mereka yang sadar bahwa maut dan kematian selalu mengintai hidupnya, tentunya mereka tidak akan rakus dengan harta dan kesenangan, apalagi perbuatan-perbuatan jahat yang menyimpang dari kebajikan dan kebenaran."
	},
	{
		sloka: 'Sloka 27',
		ayat: "Bagaikan keberadaan ilalang muda yang tajam, akan tidak tajam lagi di masa tuanya. Demikianlah hendaknya kebajikan/kebenaran, harta dan ilmu pengetahuan itu dikejar sedini mungkin, pada masa muda yang sehat."
	},
	{
		sloka: 'Sloka 28',
		ayat: "Masa muda adalah waktu yang terbaik untuk mempelajari hakekat dari kebajikan/kebenaran, usaha perolehan harta dan pengejaran terhadap ilmu pengetahuan."
	},
	{
		sloka: 'Sloka 29',
		ayat: "Masa anak-anak menantikan masa muda, setelah muda pasti akan diikuti masa tua dan bagi masa tua kematian sudah pasti semakin dekat. Menyadari itu hendaknya manusia segera melakukan kebajikan dan kebenaran."
	},
	{
		sloka: 'Sloka 30',
		ayat: "Panjangnya hidup manusia harus dikurangi masa sakit, di mana kala itu manusia tidak kuasa melakukan aktifitas apapun, sakit pasti mempercepat datangnya kematian. Mengetahui itu manusia harus segera dan mempercepat saja pelaksanaan bajik dan benar dalam hidupnya."
	},
	{
		sloka: 'Sloka 31',
		ayat: "Karena kematian tidak bisa diprediksi kedatangannya, pun tidak ada yang memberi tahu kapan datangnya. Selagi masih hidup, lakukanlah dengan segera kebajikan dan kebenaran itu."
	},
	{
		sloka: 'Sloka 32',
		ayat: "Keluarga, sahabat, dan teman hanya bisa mengantar sampai di kuburan saja ketika kematian itu datang. Adapun yang tetap turut mengantarkan roh hingga ke alam akherat adalah perbuatan baik dan buruk semasa hidupnya; lakukanlah segera perbuatan baik itu, yang akan menjadi teman pengantar ke alam surga."
	},
	{
		sloka: 'Sloka 33',
		ayat: "Dapat dipastikan setelah mati yang tertinggal hanyalah badan kasar tanpa guna dan akhirnya akan dibuang karena tidak ada bedanya dengan pecahan piring dan mangkok. Untuk sementara jasad itulah yang dihormati oleh keluarga dan kerabat, selanjutnya mereka akan membakar atau menanamnya dalam tanah. Oleh karena itu usahakanlah terus untuk melakukan kebajikan dan kebenaran, ia yang akan menjadi teman abadi guna mencapai kebahagiaan dan kebebasan abadi."
	},
	{
		sloka: 'Sloka 34',
		ayat: "Hanya kebajikan dan kebenaran itu saja yang terpenting, hanya ketentraman hati yang merupakan daya tahan dari berbagai godaan sesat, hanya itulah yang dapat melebur dosa dan menghilangkan duka hati. Camkanlah dengan baik kebenaran dan kesadaran diri. Hendaknya ilmu pengetahuan yang benar menjadi tujuan hidup, karena pengetahuan yang benar membawa pada kebahagiaan, sedangkan tindakan tidak menyakiti, tidak membunuh, tidak dibutakan oleh amarah, semua itulah yang dinamakan dengan kebahagiaan hakiki."
	},
	{
		sloka: 'Sloka 35',
		ayat: "Sesungguhnya semua agama memiliki tujuan yang sama. Semua agama mengajarkan kebajikan/kebenaran untuk mencapai alam surga dan pembebasan dari kesengsaraan; namun cara masing-masing dalam mencari kebenaran berbeda-beda. Agama yang bingung membenarkan yang tidak benar. Kebenaran kelompok dianggapnya kebenaran untuk semua, hingga akhirnya menyalahkan yang sesungguhnya benar (kebenaran hakiki yang dapat diterima di berbagai kalangan). Bahkan agama yang bingung ada yang menyatakan bahwa kebenaran itu ada di dalam goa; atau Tuhan hanya milik kelompoknya saja."
	},
	{
		sloka: 'Sloka 36',
		ayat: "Karenanya janganlah angkuh pada orang yang bijaksana, namun mohonlah selalu pada beliau ajaran tentang kebijaksanaan. Sebab yang disebut dengan kebajikan dan kebenaran hakiki (kebenaran universal), pengertian dan pemahamannya kadang muncul tanpa disangka-sangka."
	}
    ];

  $scope.bab2 = [
	{
		sloka: 'Sloka 37',
		ayat: "Jika ingin mengetahui kebenaran, pahamilah secara cerdas wahyu Tuhan lalu bandingkan dengan tafsir-tafsirnya serta dengan aturan-aturan moral/etika/susila yang berlaku dalam sosial masyarakat. Jika demikian maka akan sempurnalah pemahaman kita tentang apa sesungguhnya kebenaran dan kebajikan itu."
	},
	{
		sloka: 'Sloka 38',
		ayat: "Sesungguhnya semua kitab suci adalah wahyu Tuhan, ia adalah petunjuk bagi umat manusia untuk hidup damai dan sejahtera, ia adalah sumber dari segala sumber kebajikan dan kebenaran. Apa yang telah terjadi, apa yang sedang terjadi, dan apa yang akan terjadi terkandung dalam wahyu Tuhan."
	},
	{
		sloka: 'Sloka 39',
		ayat: "Wahyu Tuhan hendaknya dipelajari dengan benar, dengan jalan mempelajari terlebih dahulu tafsir-tafsirnya, sebab Wahyu Tuhan sungguh takut jika dipelajari oleh mereka yang memiliki kedangkalan pemahaman dan sedikit pengetahuan. Sebab bagi mereka yang sedikit pengetahuan dan dangkal dalam analisis, wahyu Tuhan hanya akan dijadikan pembenar dari tindakan-tindakannya yang sesat."
	},
	{
		sloka: 'Sloka 40',
		ayat: "Yang patut dicamkan secara mendalam adalah kebenaran universal dalam wahyu Tuhan, kebenaran universal dalam tafsir-tafsirnya, dan kebenaran universal dari mereka-mereka (orang suci) yang hatinya telah tercerahi oleh kebajikan dan kebenaran."
	}    ];
  $scope.bab3 = [
	{
		sloka: 'Sloka 41',
		ayat: "Apa pun yang ditimbulkan oleh pikiran, perkataan, dan perbuatan yang tidak menyenangkan bagi dirimu, apapun yang menimbulkan duka dan sakit hati bagi dirimu; janganlah hendaknya yang menimbulkan keadaan seperti itu engkau lakukan pada orang lain. Perbuatan apapun yang tidak engkau sukai menimpa dirimu, janganlah perbuatan seperti itu engkau timpakan kepada orang lain."
	},
	{
		sloka: 'Sloka 42',
		ayat: "Siapapun orang yang telah menang melawan hawa nafsunya, merekalah orang yang sungguh-sungguh bijaksana dalam kebajikan dan kebenaran; mereka inilah yang patut untuk ditiru dalam pelaksanaan bajik/benar."
	},
	{
		sloka: 'Sloka 43',
		ayat: "Kebajikan dan kebenaran itu memenuhi semesta ini, ia tidak terikat oleh apapun, ia tidaklah milik perseorangan, kelompok pun ras tertentu, ia antara ada dan tiada. Ia akan muncul menampakkan dirinya dalam perbuatan manusia yang bajik dan benar, namun ia sungguh-sungguh tiada dalam hati dan perbuatan manusia-manusia yang berhati kotor dan jahat."
	},
	{
		sloka: 'Sloka 44',
		ayat: "Analisa dan pelajarilah segala perilaku dan setiap perbuatan, hingga dapat diketahui hakekat dari kebajikan dan kebenaran. Setelah dipahami simpanlah dalam hati. Segala yang tidak menyenangkan bagi diri pribadi, janganlah yang seperti itu dilakukan kepada orang lain. Hendaknya apa yang menyenangkan bagi diri, yang seperti itulah diberikan kepada yang lain."
	},
	{
		sloka: 'Sloka 45',
		ayat: "Mereka yang tidak melakukan kebajikan dan kebenaran, keberadaannya bagaikan padi yang hampa atau telur busuk, kenyataannya ia ada tapi sungguh tiada berguna."
	},
	{
		sloka: 'Sloka 46',
		ayat: "Sebagaian besar manusia di bumi tidak memahami hakekat kebajikan dan kebenaran. Sungguh mereka tidak mengendalikan nafsunya dan hidup mereka hanya untuk menunggu mati, tanpa pernah berusaha untuk memahami hakekat kematian. Hidup yang hampa seperti itu tiada beda dengan rumput yang mati dan tumbuh kembali, tumbuhnya hanya untuk menunggu mati."
	},
	{
		sloka: 'Sloka 47',
		ayat: "Mereka yang ingkar dan mungkir dari kebajikan dan kebenaran, disebabkan oleh keangkuhan diri, serta tetap melakukan perbuatan-perbuatan keji dan jahat, sungguh dapat dipastikan bahwa dalam hidupnya mereka hanya akan memperoleh kesedihan dan kesengsaraan saja."
	},
	{
		sloka: 'Sloka 48',
		ayat: "Mereka yang bodoh dan tetap melakukan perbuatan-perbuatan keji dan jahat akan memperoleh neraka, setelah penyiksaan neraka dilaluinya, lalu menitislah ia menjadi binatang; bila kemudian kelahirannya meningkat, menjelmalah ia menjadi orang yang cacat, hina, sengsara dan hidupnya selalu terombang-ambing dalam kesedihan dan hidup mereka jauh dari kesenangan."
	},
	{
		sloka: 'Sloka 49',
		ayat: "Sesungguhnya yang paling mendesak untuk dilakukan adalah pengejaran akan harta yang tidak bisa dirampas atau dicuri oleh siapapun, harta yang akan selalu setia menemani ke alam akherat, harta seperti inilah hendaknya dengan tekun dicari, harta itu adalah kebajikan dan kebenaran."
	},
	{
		sloka: 'Sloka 50',
		ayat: "Mereka yang dengan tekun mengusahakan kebajikan dan kebenaran, meskipun hidup dalam kemiskinan dan menjadi pengemis, sesungguhnya ialah orang yang benar-benar kaya, karena kekayaannya itu tidak mungkin dapat dirampas atau pun dicuri oleh siapapun juga."
	},
	{
		sloka: 'Sloka 51',
		ayat: "Mereka yang tekun dalam kebajikan dan kebenaran, secara ajaib akan memperoleh kehidupan yang layak. Karena bagi orang  yang bajik dan benar, makanan, pakaian, dan berbagai macam harta kekayaan seolah-olah datang dan menawarkan diri untuk dimiliki."
	},
	{
		sloka: 'Sloka 52',
		ayat: "Banyak makanan yang tersedia dalam hutan, juga sungai-sungai yang berair jernih ada di sana, lampunya adalah bulan; hingga janganlah mengorbankan kebajikan dan kebenaran demi memperoleh kekayaan duniawi, sebab mungkin saja anda akan terlambat dalam pelaksanaan kebajikan dan kebenaran, dikarenakan kesibukan untuk menumpuk harta hasil kekejian dan kejahatan."
	},
	{
		sloka: 'Sloka 53',
		ayat: "Laksanakanlah kebajikan dan kebenaran dengan tekun dan bersungguh-sungguh, bersamaan dengan itu carilah juga harta yang didasari oleh kebajikan dan kebenaran. Bagaikan keberadaan seekor sapi yang sedang membajak sawah, sambil bekerja, sempat juga ia meraih rumput yang tumbuh disekitarnya, dengan itu ia bekerja tanpa merasa lelah."
	},
	{
		sloka: 'Sloka 54',
		ayat: "Kebajikan dan kebenaran itu amatlah mulia, ia juga bersifat amat rahasia, bagaikan jejak-jejak ikan yang berenang dalam air. Biarpun seperti itu adanya, bagi orang yang bijaksana, kebajikan dan kebenaran itu dengan tekun dan keteguhan hati akan selalu dilaksanakannya."
	}
    ];
  $scope.bab4 = [
	{
		sloka: 'Sloka 55',
		ayat: "Manusia sesuai profesinya dibagi menjadi empat golongan. Agamawan adalah golongan pertama, kedua Negarawan, ketiga Usahawan, dan keempat adalah Pelayan. Ketiga golongan profesi tersebut haruslah dalam hidupnya melakukan penyucian diri, apabila diinginkan mereka boleh hidup selibat. Sedangkan golongan Pelayan juga boleh melakukan penyucian walaupun tidak menjadi keharusan baginya."
	},
	{
		sloka: 'Sloka 56',
		ayat: "Profesi Agamawan haruslah mempelajari ilmu pengetahuan, mengajarkan kebajikan dan kebenaran, mengajarkan kitab suci, melaksanakan upacara dan pemujaan, melakukan amal sosial, bersembahyang ke tempat-tempat suci, serta menjadi pemimpin upacara."
	},
	{
		sloka: 'Sloka 57',
		ayat: "Inilah kewajiban seorang Agamawan, melakukan kebajikan dan kebenaran, setia pada ucapan dan janji, teguh pada pelaksanaan kebajikan dan kebenaran, menaklukkan hawa nafsu, tidak mementingkan diri sendiri, rendah hati, sabar dan tahan godaan, tidak diliputi oleh kemarahan dan kejahatan, melakukan persembahan kepada Tuhan, beramal sedekah, menyucikan fisik dan rohani, serta welas asih dan pemaaf."
	},
	{
		sloka: 'Sloka 58',
		ayat: "Inilah kewajiban Negarawan, mempelajari ilmu pengetahuan dan kitab suci, melaksanakan upacara kurban kehadapan Tuhan, memfasilitasi upacara kebaktian, menjaga keamanan negara, mengenal bawahannya sampai pada sanak keluarga dan kerabatnya, berderma dan bersedekah."
	},
	{
		sloka: 'Sloka 59',
		ayat: "Seorang Usahawan, hendaknya belajar kepada Agamawan dan Negarawan. Mereka hendaknya berderma dan bersedekah pada waktu yang baik, hendaknya mereka bersedekah kepada orang-orang yang memerlukan dan meminta bantuan kepadanya. Mereka hendaknya taat beribadat."
	},
	{
		sloka: 'Sloka 60',
		ayat: "Inilah kewajiban Pelayan, setia mengabdi kepada Agamawan, Negarawan, dan Usahawan, mereka hendaknya melakukan tugas dengan sebaik-baiknya."
	},
	{
		sloka: 'Sloka 61',
		ayat: "Apabila Negarawan pengecut, angkara murka, tidak mengusahakan kebahagiaan negara dan tidak mengasihi rakyatnya, Agamawan rakus, berwatak jahat, menyeleweng dari norma dan susila, curang, diliputi birahi, mementingkan diri sendiri, mencemarkan tempat suci, negara di mana mereka itu hidup pasti hancur berkeping-keping."
	},
	{
		sloka: 'Sloka 62',
		ayat: "Usahawan menganggur, Pelayan tidak setia, mereka-mereka yang seperti ini pasti akan memperoleh malapetaka."
	},
	{
		sloka: 'Sloka 63',
		ayat: "Inilah yang harus dilakukan oleh keempat profesi: jujur, tidak egois dan mementingkan diri sendiri, dapat menasehati diri sendiri, mengendalikan indra-indra."
	},
	{
		sloka: 'Sloka 64',
		ayat: "Inilah yang harus dilaksanakan: tidak menyakiti dan membunuh dalam arti luas, setia pada ucapan, berkata benar, tidak berpikiran jahat pada semua mahluk, tahan cobaan, teliti, orang seperti ini sesungguhnya telah memperoleh kebahagiaan."
	},
	{
		sloka: 'Sloka 65',
		ayat: "Jika ketidakjujuran yang menjadi dasar perilaku, ia pasti akan mengantar ke alam maut. Jika kejujuran dan ketulusan hati menjadi pondasi perilaku, ia akan mengantar ke alam surga."
	},
	{
		sloka: 'Sloka 66',
		ayat: "Hidup dengan tidak mementingkan diri sendiri, itulah dasar dari kebajikan dan kebenaran utama. Tahan menghadapi cobaan hidup, itulah kekuatan yang utama. Berkeyakinan bahwa orang lain adalah bagian dari diri sendiri, itulah pengetahuan utama. Setia pada ucapan dan janji adalah kesetiaan utama."
	},
	{
		sloka: 'Sloka 67',
		ayat: "Perilaku mementingkan kepentingan pribadi tidak disukai oleh siapapun; mereka yang jahat, keji dan berperilaku hina sekalipun akan membencinya. Bagaikan orang yang meninggalkan sumur kering, menghindari duri dan menyelamatkan diri dari kebakaran, demikianlah orang-orang akan meninggalkan mereka yang hanya mementingkan dirinya sendiri."
	},
	{
		sloka: 'Sloka 68',
		ayat: "Orang yang berhati tenang senantiasa berkeadaan sadar, mereka sanggup menasehati dirinya sendiri. Ketenangan hati sesungguhnya lebih utama dari sedekah, sebab sering kali mereka yang dermawan tidak memiliki ketenangan hati, hingga dapat dipengaruhi oleh kemarahan dan keserakahan. Maka lebih utamalah ketenangan hati itu dibanding sedekah."
	},
	{
		sloka: 'Sloka 69',
		ayat: "Sesungguhnya bukan lantaran mandi seseorang dapat disebut suci, hanya mereka yang memiliki ketenangan hati sajalah bisa disebut suci."
	},
	{
		sloka: 'Sloka 70',
		ayat: "Orang seperti inilah pantas disebut berhati tenang, tidak berbohong, tidak girang hati apabila memperoleh kesenangan, tidak bersedih jika ditimpa kesusahan, memahami filsafat secara mendalam, sanggup menasehati diri sendiri, hanya mereka sajalah yang pantas dianggap suci."
	},
	{
		sloka: 'Sloka 71',
		ayat: "Sesungguhnya surga adalah kesuksesan dalam pengendalian nafsu, sedangkan neraka adalah kegagalan dalam mengendalikan nafsu."
	},
	{
		sloka: 'Sloka 72',
		ayat: "Mereka yang berhasil menguasai nafsunya akan berumur panjang, termasyur, memiliki nama harum, dan tidak pernah kekurangan harta kekayaan."
	}
    ];
  $scope.bab5 = [
	{
		sloka: 'Sloka 73',
		ayat: "Sepuluh banyaknya hawa nafsu yang harus dikendalikan, tiga bagian dari pikiran, empat bagian dari perkataan, dan tiga bagian dari perbuatan."
	},
	{
		sloka: 'Sloka 74',
		ayat: "Keinginan untuk memiliki hak milik orang, kebencian pada mahluk hidup, dan ketidakpercayaan pada hukum sebab akibat, inilah produk pikiran yang harus dikendalikan."
	},
	{
		sloka: 'Sloka 75',
		ayat: "Berkata jahat, berkata kasar, memfitnah, dan berbohong, inilah empat jenis perkataan yang harus dikendalikan."
	},
	{
		sloka: 'Sloka 76',
		ayat: "Mencuri, berzinah, dan membunuh inilah perbuatan yang jangan pernah dilakukan."
	},
	{
		sloka: 'Sloka 77',
		ayat: "Yang membuat orang dikenal adalah hasil perbuatannya, perkataannya, dan pikirannya. Melalui ketiganya ini orang mengetahui kepribadian diri. Maka dari itu biasakanlah untuk berpikiran baik, berkata benar, dan berbuat bajik."
	},
	{
		sloka: 'Sloka 78',
		ayat: "Walau sangatlah sukar mengamalkan kebaikan dan kebajikan dalam pikiran, perkataan dan perbuatan, janganlah semua itu membuat kita berhenti untuk melaksanakannya."
	}
    ];
  $scope.bab6 = [
	{
		sloka: 'Sloka 79',
		ayat: "Kesimpulannya, pikiranlah yang sangat menentukan perkataan dan perbuatan."
	},
	{
		sloka: 'Sloka 80',
		ayat: "Pikiran adalah sumber dari segala macam nafsu, ialah yang menggerakkan dan mengarahkan perbuatan menuju kebajikan ataupun kejahatan. Maka dari itu usahakanlah terlebih dahulu untuk mengendalikan pikiran."
	},
	{
		sloka: 'Sloka 81',
		ayat: "Pikiran itu sangatlah labil dan berubah-ubah, apabila seseorang dapat mengendalikan pikirannya, niscaya ia akan memperoleh surga di dunia dan surga di akherat."
	},
	{
		sloka: 'Sloka 82',
		ayat: "Mata dapat melihat sesuatu dikarenakan oleh pikiran. Mata tidak akan melihat apapun dengan jelas jika pikiran kosong dan tidak fokus. Pikiran itulah sesungguhnya yang menerima kesan dari panca indra."
	},
	{
		sloka: 'Sloka 83',
		ayat: "Bagian-bagian tubuh lawan jenis bisa menimbulkan rasa hormat ataupun nafsu birahi, masing-masing persepsi yang berbeda muncul dari pikiran yang berbeda pula. Maka celakalah mereka yang memandang lawan jenisnya secara sesat dan penuh birahi."
	},
	{
		sloka: 'Sloka 84',
		ayat: "Air liur yang diludahkan, ataupun air liur yang dihisap saat berciuman adalah cairan yang sama. Orang jijik melihat ludah dan sangat bernafsu untuk menghisapnya saat birahi."
	},
	{
		sloka: 'Sloka 85',
		ayat: "Seorang anak dan seorang ayah beda persepsinya jika melihat payudara si ibu. Demikianlah sesungguhnya benda yang sama terlihat berbeda akibat pikiran."
	},
	{
		sloka: 'Sloka 86',
		ayat: "Bedalah tanggapan orang selibat, pria hidung belang, dan seekor serigala dalam memandang wanita. Mayat menurut si selibat, seksi dan menggairahkan menurut pria hidung belang, makanan lezat menurut serigala. Akibat kebingungan pikiran muncullah beragam persepsi."
	},
	{
		sloka: 'Sloka 87',
		ayat: "Seorang ayah lantaran cinta mencium anak dan istrinya, namun perasaan si ayah akan beda tatkala ia mencium anaknya dengan saat ketika ia mencium istrinya. Perbedaan ini disebabkan oleh pikiran si ayah. Pikiran itulah yang sesungguhnya menyebabkan munculnya perbedaan persepsi."
	}
    ];
  $scope.bab7 = [
	{
		sloka: 'Sloka 88',
		ayat: "Bagi mereka yang ingin memperoleh kebahagiaan abadi, hendaknya jangan sekali-kali berkeinginan untuk memiliki sesuatu yang bukan merupakan haknya, jangan sekali-kali berperasaan iri hati kepada orang yang beruntung."
	},
	{
		sloka: 'Sloka 89',
		ayat: "Jangan merindukan sesuatu yang tidak mungkin, jangan menginginkan sesuatu yang mustahil, dan janganlah memikirkan cara-cara jahat guna memenuhi hasrat keinginan. Janganlah dengki dan iri hati pada orang yang sukses, berbelaskasihlah kepada segala mahluk."
	},
	{
		sloka: 'Sloka 90',
		ayat: "Oleh karenanya, kekanglah dengan kuat indra-indra dan pikiran itu, janganlah dibiarkan melakukan tindakan yang terlarang dan melanggar hakekat kebajikan, janganlah dibiarkan melakukan tindakan tercela yang pada akhirnya akan menimbulkan hal-hal yang tidak menyenangkan."
	},
	{
		sloka: 'Sloka 91',
		ayat: "Sesungguhnya orang yang sengsara adalah mereka yang tidak suka melihat harta kekayaan orang, tidak suka melihat kerupawanan orang, tidak suka melihat status sosial orang, tidak suka melihat kesenangan orang, dan tidak suka melihat keberuntungan orang. Bagi mereka yang senatiasa diliputi kedengkian dan iri hati, hidupnya akan selalu dilekati oleh duka nestapa."
	}
    ];
  $scope.bab8 = [
	{
		sloka: 'Sloka 92',
		ayat: "Segala sesuatu yang ada di bumi ini adalah milik dari orang sabar, demikian juga apa yang ada di jagat raya ini adalah juga milik orang yang berhati sabar. Hanya dengan kesabaranlah keberhasilan itu dapat diperoleh, mereka yang sabar dipuji dan dihormati di bumi, apabila mereka mati surgalah ganjarannya."
	},
	{
		sloka: 'Sloka 93',
		ayat: "Kekayaan utama adalah kesabaran hati, apa gunanya emas permata dibandingkan dengan kesabaran, sebab hanya kesabaran saja yang bisa menasehati orang dari kesesatannya, sedangkan emas dan permata hanyalah bagian dari bongkahan-bongkahan tanah yang membisu."
	},
	{
		sloka: 'Sloka 94',
		ayat: "Mustahil ada persahabatan tanpa kesabaran hati, yang ada pastilah kemurkaan, marah dan dendam, maka dari itu pupuklah terus kesabaran di dalam hati masing-masing."
	},
	{
		sloka: 'Sloka 95',
		ayat: "Seorang manusia sejati dan berbudi luhur keadaannya bagaikan seekor ular yang membuang kulitnya, demikian pulalah orang yang sabar senantiasa meninggalkan kemarahan dari dalam hatinya."
	}
    ];
  $scope.bab9 = [
	{
		sloka: 'Sloka 96',
		ayat: "Meskipun seseorang selalu menang dalam pertempuran, selalu mengalahkan musuh-musuhnya, jika ia tetap terkungkung dalam watak pemarahnya dan sering mengumbar amarahnya pada orang lain, mereka akan selalu kedatangan musuh-musuh baru, sedangkan bagi yang mampu mengekang nafsu amarahnya, tidak akan pernah ada musuh dalam hidupnya."
	},
	{
		sloka: 'Sloka 97',
		ayat: "Minuman keras hanya diijinkan bagi orang yang benar-benar telah mampu menguasai indra-indranya, sedangkan bagi orang yang belum mampu untuk menguasai indranya, minuman seperti ini dilarang untuk dikonsumsi. Kemarahan hendaknya anda minum, anda kuasai dan anda tundukkan, hingga dari itu kesabaran hati pasti anda dapatkan."
	},
	{
		sloka: 'Sloka 98',
		ayat: "Seseorang yang berpikir bahwa mahluk-mahluk di semesta ini adalah bagian dari dirinya, yang berpikir bahwa orang lain adalah juga dirinya, mereka yang seperti ini tidak akan pernah menjadi manusia egois, mereka menjadi kasih terhadap sekalian semesta raya, hanya orang seperti ini sajalah yang mampu memperoleh kesenangan dan kepuasan yang hakiki."
	},
	{
		sloka: 'Sloka 99',
		ayat: "Seseorang yang selalu menganggap orang lain sebagai musuh dan selalu menganggap makhluk-makhluk lain sebagai ancaman bagi hidupnya, orang yang seperti ini tidak akan pernah memperoleh kesenangan apalagi kepuasan. Hidup mereka selalu was-was, selalu resah dan selalu merasa terancam walaupun telah berdiam di kamar baja dan dijaga ribuan prajurit."
	},
	{
		sloka: 'Sloka 100',
		ayat: "Orang yang sulit tidur (insomnia) adalah mereka yang sedang sakit, mereka yang ketakutan, mereka yang dibenci, mereka yang sedang memikirkan pekerjaannya, dan mereka yang sedang dimabuk asmara serta mereka yang sedang nafsu birahi."
	},
	{
		sloka: 'Sloka 101',
		ayat: "Orang yang dapat menguasai kemarahannya berstatus lebih utama dari orang yang pemarah, mekipun si pemarah itu kaya raya sedangkan si penguasa amarah hidup dalam kemiskinan harta. Orang yang penyabar jauh lebih baik dari orang yang tidak sabaran walaupun mereka ini memiliki kekuasaan. Penjelmaan menjadi manusia lebih utama dari mahluk apapun di bumi ini walaupun makhluk-makhluk ini lebih kuat fisik dan tenaganya, demikian juga mereka yang berhasil menyucikan dirinya lahir batin jauh lebih utama dari manusia manapun walau mereka lebih kaya, lebih berkuasa, lebih wibawa, lebih dihormati dan lain-lain."
	},
	{
		sloka: 'Sloka 102',
		ayat: "Ketahuilah bahwa orang yang dikuasai oleh kemarahan dan angkara murka apapun yang dipersembahkannya, apapun yang disumbang dan disedekahkannya, apapun jenis puasa dan pantangan yang dilakukannya, apapun yang dikurbankannya, semua itu menjadi tanpa pahala, mereka hanya mendapatkan rasa lelah dan kepayahan, oleh karenanya kuasailah kemarahan dan nafsu angkara itu."
	},
	{
		sloka: 'Sloka 103',
		ayat: "Teguhlah dalam penyucian jiwa. Angkara murka dilenyapkan dengan menyucikan hati, kedengkian dilenyapkan dengan kebahagiaan, pengetahuan suci akan membinasakan ego, selanjutnya jagalah pikiran, perkataan dan perbuatan dengan selalu mawas diri."
	},
	{
		sloka: 'Sloka 104',
		ayat: "Tiada bedanya kemarahan itu dengan kematian, demikian juga cinta buta itu sekeruh sungai yang dipenuhi kotoran dan bangkai, namun pengetahuan suci bagaikan kantung ajaib yang dapat menyediakan apapun keperluan dan keinginan dari pemiliknya."
	},
	{
		sloka: 'Sloka 105',
		ayat: "Mereka yang sedang diliputi oleh kemarahan dan dikuasai oleh nafsu angkaranya dapat dipastikan akan melakukan perbuatan jahat, mereka yang dibutakan oleh amarah dan angkara dapat menghujat orang suci, bahkan sampai membunuh ayah, ibu, anak dan orang-orang dekatnya."
	},
	{
		sloka: 'Sloka 106',
		ayat: "Mereka yang sedang dikuasai oleh angkara murka akan lupa dengan etika berbahasa, hingga perkataan yang kasar, jorok, tabu, dan lain-lain akan dilontarkannya, demikian juga mereka akan melakukan perbuatan-perbuatan yang terlarang dan menyalahi kebajikan pun kebenaran."
	},
	{
		sloka: 'Sloka 107',
		ayat: "Kemarahan dan nafsu angkara adalah musuh yang sesungguhnya berada dalam diri kita, jika ada orang yang dapat menghilangkan kemarahan dan angkaranya, pastilah mereka itu akan dimuliakan di bumi dan di akherat."
	},
	{
		sloka: 'Sloka 108',
		ayat: "Maka dari itu, mulai saat ini juga, hendaknya manusia benar-benar berusaha dengan sekuat tenaganya untuk menghilangkan kemarahan dan nafsu angkaranya, kasihlah dengan sesama manusia dan segenap isi semesta ini."
	},
	{
		sloka: 'Sloka 109',
		ayat: "Mereka-mereka yang selalu teguh dan sabar dalam melakukan dan mengamalkan kebajikan dan kebenaran, mereka yang dapat menghilangkan kemarahan dan nafsu angkaranya, niscaya akan memiliki nama harum di bumi dan di alam surga."
	}
    ];
  $scope.bab10 = [
	{
		sloka: 'Sloka 110',
		ayat: "Hendaknya manusia yang bijaksana meninggalkan perasaan tidak percaya ataupun ragu-ragu akan adanya alam akherat, karma dari perbuatan, sikap mencela kitab suci dan keesaan Tuhan, demikian juga hendaknya mereka menjauhkan diri dari sifat iri hati, suka dipuji, amarah, dan segala tindakan kejam dan jahat lainnya."
	},
	{
		sloka: 'Sloka 111',
		ayat: "Meskipun anda masih ragu akan adanya alam akherat dan karma (buah) dari perbuatan, hendaknya jauhkan diri dari perilaku jahat, meskipun anda tidak percaya pada kitab suci dan nabi, teruslah berbuat baik dan bajik, sebab mereka yang dinyatakan sengsara adalah orang yang tanpa keyakinan sekaligus tanpa perbuatan bajik dan benar."
	},
	{
		sloka: 'Sloka 112',
		ayat: "Walaupun orang tidak bisa melihat langsung alam akherat, orang yang teguh keyakinannya akan kebenaran agama, pasti dapat merasakan alam itu dalam hati dan keyakinannya."
	},
	{
		sloka: 'Sloka 113',
		ayat: "Orang yang tidak meyakini wahyu Tuhan dalam kitab suci dan tidak taat pada aturan etika yang berlaku, dapat dipastikan mereka akan memperoleh kesengsaraan hidup yang berulang-ulang."
	},
	{
		sloka: 'Sloka 114',
		ayat: "Apabila ada orang yang tanpa kepercayaan, tanpa kebenaran, dan tanpa perasaan welas asih, apabila anda disambut oleh mereka hendaknya jangan pernah anda lengah, sebab mereka itu sama berbahayanya dengan angin deras di tepian sungai yang tanpa disangka dapat menceburkan anda, bagaikan debu yang berterbangan tertiup angin, penuh dengan kotoran."
	},
	{
		sloka: 'Sloka 115',
		ayat: "Sesungguhnya mereka yang tanpa kepercayaan, tanpa perbuatan baik, dan tanpa kasih sayang berkeadaan sama dengan orang yang telah mati."
	},
	{
		sloka: 'Sloka 116',
		ayat: "Orang yang tidak percaya pada keesaan Tuhan, wahyu kitab suci, dan keberadaan orang suci, mereka sesungguhnya hanyalah memelihara fisiknya belaka, mereka sibuk menumpuk harta kekayaan dengan cara jahat, mereka diperbudak oleh kesenangan-kesenangan duniawi tanpa hirau akan hari esok dan kebahagiaan orang lain. Mereka ini sungguh mengabaikan kepuasan bagi rohaninya."
	}
    ];
  $scope.bab11 = [
	{
		sloka: 'Sloka 117',
		ayat: "Ada dua hal yang membuat orang menjadi terpuji, pertama tidak mengucapkan kata-kata kasar, kedua tidak berpikir untuk melakukan perbuatan jahat."
	},
	{
		sloka: 'Sloka 118',
		ayat: "Hendaknya perkataan selalu terarah pada sesuatu yang membawa kebaikan, namun hendaknya janganlah disesumbarkan atau dibicarakan secara berlebih-lebihan dengan maksud pamer, sebab pikiran baik jika dibicarakan dengan cara gembar-gembor dan berlebih-lebihan dapat menimbulkan perasaan benci dari orang yang mendengarkannya."
	},
	{
		sloka: 'Sloka 119',
		ayat: "Jika perkataan itu muncul dari pikiran yang baik, dan cara pengungkapkannya juga dengan cara yang baik, maka kesenangan itu pasti dapat diperoleh. Sebaliknya meskipun maksudnya baik namun salah cara mengungkapkannya, tentulah akan menimbulkan duka nestapa bagi yang mendengarkannya."
	},
	{
		sloka: 'Sloka 120',
		ayat: "Perkataan yang tidak baik bagaikan anak panah yang dilepaskan dari busurnya, ia dapat melukai dan menembus hati orang yang mendengarkan, oleh karenanya kuasailah diri dengan mengendalikan kata dan bahasa."
	},
	{
		sloka: 'Sloka 121',
		ayat: "Demikian kuatnya efek dari perkataan, ia dapat menyakiti orang hingga ke sumsumnya, oleh karena itu mereka yang bajik dan benar akan menghindar dari perkataan menghujat, mengecam, dan kata-kata jahat lainnya."
	},
	{
		sloka: 'Sloka 122',
		ayat: "Hutan yang semua pohonnya ditebang dapat tumbuh kembali dengan cepat, namun hati yang telah disakiti oleh perkataan, tersiksa dalam jangka waktu yang sangat lama."
	},
	{
		sloka: 'Sloka 123',
		ayat: "Janganlah menghina dan mencerca orang-orang yang cacat fisiknya, mereka yang buta huruf, orang yang hidup dalam kesengsaraan, orang sakit, orang yang tercela dan hina, orang yang tertimpa kecelakaan, orang miskin, orang bodoh, demikian juga janganlah mencela orang yang penakut, orang yang terkena aib ataupun yang diaibkan, janganlah kamu menghina makhluk-makhluk yang ada di semesta ini, sekalipun yang dianggap menjijikkan."
	},
	{
		sloka: 'Sloka 124',
		ayat: "Oleh karena itu, orang bijaksana yang berpegang teguh pada kebajikan dan kebenaran, tidak akan mencaci, tidak memfitnah, tidak mencela dan tidak berkata bohong. Manusia hendaknya selalu mempergiat dirinya dalam mengendalikan ucapannya dan selalu menjaga agar orang lain tidak terluka oleh ucapannya."
	},
	{
		sloka: 'Sloka 125',
		ayat: "Mereka yang memuji-muji orang tatkala berhadapan namun mencelanya di belakang, mereka yang seperti ini adalah manusia berhati keji dan akan dijauhkan dari kebahagiaan di dunia maupun di akherat."
	},
	{
		sloka: 'Sloka 126',
		ayat: "Oleh karena itu janganlah kamu sekali-kali mengumpat orang, jangan mendengarkan umpatan orang, jauhkanlah diri dari situasi seperti ini (umpat-mengumpat)."
	},
	{
		sloka: 'Sloka 127',
		ayat: "Orang yang jahat sekalipun takut hatinya kepada para pendusta dan pada mereka yang tempramental, sebab tiada bedanya mereka itu dengan ular yang dapat melahap anda secara diam-diam atau dengan bisanya yang mematikan."
	}
    ];
  $scope.bab12 = [
	{
		sloka: 'Sloka 128',
		ayat: "Sesungguhnya racun dan obat itu letaknya berdekatan dan semuanya ada dalam diri. Mereka yang bodoh dan gemar dengan kejahatan akan memperoleh racun, sebaliknya mereka yang teguh pada pelaksanaan kebajikan dan kebenaran niscaya akan memperoleh obat kehidupan/amerta."
	},
	{
		sloka: 'Sloka 129',
		ayat: "Persembahan kurban, amal sedekah, janji berpantang/sumpah batin, semua itu dapat membebaskan orang dari kesengsaraan hidup dan kemalangan, namun semua yang telah disebutkan di atas masih kalah oleh nilai kebajikan dan kebenaran dalam mencerahkan batin."
	},
	{
		sloka: 'Sloka 130',
		ayat: "Di antara kelahiran, mereka yang mengabdikan dirinya pada kebenaran adalah yang utama, di antara yang bersinar mataharilah yang paling terang, dalam anggota badan kepalalah yang paling utama; jika dalam perbuatan, pelaksanaan kebajikan yang berlandaskan pada kebenaran itulah yang mengatasi semuanya."
	},
	{
		sloka: 'Sloka 131',
		ayat: "Orang yang tidak menepati janji hingga membuat orang lain bersedih hati sungguhnya tidak memiliki ketakutan akan siksa neraka, hendaknya janganlah mengobral janji jika tidak yakin dapat menepatinya."
	},
	{
		sloka: 'Sloka 132',
		ayat: "Ucapkanlah selalu kata-kata yang mengandung kebenaran, jangan mengucapkan kata-kata yang dapat melukai hati orang dan jangan mengumpat. Ucapkanlah selalu kata-kata yang bermanfaat, jangan mengucapkan kata-kata kasar, jangan kata-kata yang dipengaruhi oleh kemarahan, jangan kata-kata egois, jangan kata fitnahan, dan janganlah mengucapkan kata-kata yang bermakna jahat lainnya."
	},
	{
		sloka: 'Sloka 133',
		ayat: "Mereka yang cinta kebenaran tidak akan pernah berbohong, mereka akan selalu dengan jujur menyampaikan apa yang diketahuinya, orang seperti inilah disebut mencintai kebenaran."
	},
	{
		sloka: 'Sloka 134',
		ayat: "Sesungguhnya kebenaran itu tidak selalu berada pada perkataan benar dan kesaksian jujur, jika ada orang yang berkata benar dan jujur namun menyebabkan kesengsaraan dan kematian makhluk hidup, perkataan seperti ini bohong namanya. Apabila ada orang yang berkata tidak benar dan tidak jujur demi menyelamatkan makhluk hidup dari kesengsaraan dan kematian, sesungguhnya mereka ini dikategorikan sebagai orang bijaksana yang berkata benar dan jujur."
	},
	{
		sloka: 'Sloka 135',
		ayat: "Usahakanlah selalu kesejahteraan makhluk hidup di semesta ini, karena hanya dengan tetap terpeliharanya kesejahteraan dan kelangsungan hidup mereka itulah keberadaan dan keterjagaan semesta ini tetap terjamin."
	}
    ];
  $scope.bab13 = [
	{
		sloka: 'Sloka 136',
		ayat: "Jika orang sayang akan hidupnya, apa sebabnya mereka ingin membunuh makhluk lain, mereka sungguh tidak memakai ukuran dirinya. Jika orang selalu berharap kesenangan dan kedamaian, semestinya mereka terlebih dahulu memberi kesenangan dan kedamaian itu kepada yang lainnya."
	},
	{
		sloka: 'Sloka 137',
		ayat: "Sesungguhnya tubuh yang telah ditinggal oleh rohnya, tidak lagi memiliki kegunaan bagi yang lainnya, menyadari akan hal ini kenapa kita masih memelihara tubuh ini dengan cara membunuh makhluk-makhluk lainnya."
	},
	{
		sloka: 'Sloka 138',
		ayat: "Badan wadag yang telah mati akan menjadi abu, santapan ulat-ulat, atau hanya menjadi bangkai busuk yang dijauhi orang, menyadari hal ini kenapa manusia masih memelihara tubuhnya dengan cara membunuh lalu memakan bangkai-bangkai makhluk lainnya."
	},
	{
		sloka: 'Sloka 139',
		ayat: "Singkat kata usahakanlah kesejahteraan makhluk hidup itu, segala perkerjaan anda akan menjadi tanpa guna jika melalaikan kesejahteraan makhluk lainnya, meskipun anda melakukan pekerjaan berat atau ringan usahakanlah selalu kesejahteraan bagi yang lainnya."
	},
	{
		sloka: 'Sloka 140',
		ayat: "Seekor kijang beranak satu dua, sedangkan serigala beranak enam bahkan hingga tujuh ekor. Anak kijang memiliki peluang hidup lebih besar karena jarang yang mati, sedangkan anak serigala seiring waktu akan banyak yang mati. Demikian juga manusia, mereka yang memakan makanan dengan cara tidak membunuh makhluk lain berpeluang hidup lebih panjang dibanding mereka yang membunuh makhluk hidup untuk makanannya."
	},
	{
		sloka: 'Sloka 141',
		ayat: "Orang yang memperoleh kesejahteraan lahir batin adalah mereka yang tidak menyakiti makhluk lain, tidak menyiksa dan tidak membunuh. Mereka yang ingin memperoleh kesenangan lahir batin hendaknya selalu berusaha memberi kesenangan bagi makhluk-makhluk lainnya."
	},
	{
		sloka: 'Sloka 142',
		ayat: "Orang yang tidak menyakiti, menyiksa, dan membunuh makhluk lain, segala sesuatu yang dicita-citakannya, segala sesuatu yang menjadi tujuan hidupnya, keinginan dan kehendaknya, akan dapat dengan mudah tercapai tanpa diikuti penderitaan."
	},
	{
		sloka: 'Sloka 143',
		ayat: "Jika ingin terlahir menjadi manusia rupawan, tanpa cacat, umur panjang, memperoleh kepandaian, keberanian, kesaktian, atau pengetahuan utama, janganlah menyiksa dan membunuh makhluk hidup lain."
	},
	{
		sloka: 'Sloka 144',
		ayat: "Orang yang melindungi makhluk hidup dari rasa takut, penyiksaan, dan kematian; mereka yang senantiasa berbelas kasih pada makhluk hidup akan mendapat balasan keselamatan dari segenap makhluk hidup di semesta ini, baik keselamatan di alam fana maupun di alam akherat nantinya."
	},
	{
		sloka: 'Sloka 145',
		ayat: "Memberi makanan kepada makhluk tentulah lebih rendah nilainya dibanding memberikan kasih sayang dan kebebasan hidup kepadanya."
	},
	{
		sloka: 'Sloka 146',
		ayat: "Kehidupan jauh lebih berharga dibanding apapun, maka dari itu hargailah hidup segala makhluk dengan mengasihi mereka, hendaknya manusia menghargai makhluk lain seperti ia menghargai dirinya."
	},
	{
		sloka: 'Sloka 147',
		ayat: "Mereka yang tidak dirasuki kemarahan, teguh pada kebenaran, tidak membunuh, tidak berbuat jahat, selalu berkelakuan suci, mereka yang seperti ini akan berumur panjang di kehidupan sekarang pun kelak di kelahiran berikutnya."
	},
	{
		sloka: 'Sloka 148',
		ayat: "Mereka yang kejam dan bengis pada makhluk lain akan berumur pendek, dan kelak di kehidupan berikutnya mereka akan lahir sebagai manusia berpenyakitan atau menjadi penyandang cacat."
	}
    ];
  $scope.bab14 = [
	{
		sloka: 'Sloka 149',
		ayat: "Mereka yang menggelapkan, mereka memeras, mereka yang mencuri, mereka yang merampok harta, kesenangan, dan kebenaran orang lain akan hidup dalam kenistaan, rasa was-was, dan ketakutan sepanjang hidupnya, sekarang maupun kelak di kelahiran mereka yang berikutnya."
	},
	{
		sloka: 'Sloka 150',
		ayat: "Mereka yang tidak melakukan perbuatan-perbuatan keji dan jahat, akan tetap merasa aman dan tenteram di tempat yang paling membahayakan sekalipun, mereka akan senantiasa dilindungi oleh perbuatan-perbuatannya yang bajik dan benar."
	},
	{
		sloka: 'Sloka 151',
		ayat: "Orang umum menyatakan bahwa harta adalah uang, emas, barang berharga, dan lain-lain; tapi bagi orang bijak harta yang sesungguhnya adalah kewelasasihan, perbuatan yang tidak menyakiti dan membunuh, kejujuran, perkataan yang benar dan kebajikan; harta seperti inilah yang tidak akan pernah dapat dicuri oleh para pencuri."
	},
	{
		sloka: 'Sloka 152',
		ayat: "Utamakanlah untuk menolong orang-orang yang sedang sakit, teraniaya, butuh perlindungan dan miskin."
	}];
  $scope.bab15 = [
	{
		sloka: 'Sloka 153',
		ayat: "Perbuatan memperkosa jangan hendaknya dilakukan oleh orang yang tidak ingin hidupnya berumur pendek."
	},
	{
		sloka: 'Sloka 154',
		ayat: "Orang yang ingin menjadi arif bijaksana, berkesusilaan, berilmu pengetahuan utama, dan bagi mereka yang ingin berumur panjang, jangan pernah berpikir untuk melakukan pemerkosaan."
	},
	{
		sloka: 'Sloka 155',
		ayat: "Mereka yang tidak takut bencana boleh memikirkan untuk bersenggama dengan istri orang; namun bagi yang takut akan datangnya bencana jangan sekali-kali berpikir untuk bersetubuh dengan istri oang lain."
	}];
  $scope.bab16 = [
	{
		sloka: 'Sloka 156',
		ayat: "Janganlah dibiarkan pikiran, kata-kata dan perbuatan untuk melakukan hal-hal yang buruk. Kebaikan akan dibalas kebaikan sedangkan kejahatan pasti berpahala celaka dan kenistaan."
	},
	{
		sloka: 'Sloka 157',
		ayat: "Jangan berpikir untuk membunuh, jangan berkata-kata untuk membunuh, dan jangan melakukan perbuatan membunuh. Pikiran, perkataan, dan perbuatan hendaknya selalu dilakukan demi kasih sayang dan kebajikan."
	},
	{
		sloka: 'Sloka 158',
		ayat: "Karena sesungguhnya manusia diciptakan untuk melakukan kebajikan, kebenaran dan kesusilaan; mereka yang taat akan mampu memahami tujuan dari diciptakannya semesta raya ini oleh Tuhan."
	},
	{
		sloka: 'Sloka 159',
		ayat: "Ketiga dunia akan tunduk dan dapat dikuasai oleh orang yang beretika dan bertata susila baik, tidak ada sesuatu apapun yang tidak dapat dicapai oleh orang yang teguh dan taat pada susila dan etika."
	},
	{
		sloka: 'Sloka 160',
		ayat: "Manusia menjadi utama karena kesusilaannya dan sesungguhnya kelahiran manusia bertujuan untuk melaksanakan kesusilaan itu; kekuasaan dan kebijaksanaan menjadi tanpa guna jika tidak dijabarkan dengan tindakan-tindakan yang susila."
	},
	{
		sloka: 'Sloka 161',
		ayat: "Walau agamawan yang telah lanjut usia sekalipun, jika ia tidak memiliki perilaku susila, untuk apa disegani; biarpun ia orang miskin dan dianggap hina, jika perilakunya susila ia sungguh patut dihormati dan disegani."
	},
	{
		sloka: 'Sloka 162',
		ayat: "Kebenaran dan kebajikan dijaga dengan perilaku yang baik; sastra-sastra suci dijaga dengan keteguhan hati dan pikiran; kerupawanan fisik dijaga dengan kebersihan; sedangkan kelahiran mulia dijaga dengan budi pekerti dan susila yang baik."
	},
	{
		sloka: 'Sloka 163',
		ayat: "Orang keturunan mulia dikenal melalui tingkah lakunya yang baik; walaupun asal-usul keturunan seseorang telah hilang termakan jaman, melalui kelakuannya yang susila pastilah ia keturunan orang-orang mulia."
	},
	{
		sloka: 'Sloka 164',
		ayat: "Walaupun keturunan dari agamawan mulia, keturunan dari ilmuwan pandai, semua menjadi sia-sia dan tanpa guna apabila berkelakuan jahat."
	},
	{
		sloka: 'Sloka 165',
		ayat: "Tiada sanak dan keluarga yang dapat membebaskan orang dari rasa sedih, pun tidak juga emas, kelahiran mulia, sastra-sastra, ataupun mantra-mantra; kesedihan hanya dapat dilenyapkan oleh diri sendiri melalui tindakan penuh susila."
	},
	{
		sloka: 'Sloka 166',
		ayat: "Mereka yang suka memberi pengetahuan kepada orang bodoh, menghibur orang yang sedang dirundung duka dan kesedihan, melindungi orang yang ketakutan dan terancam, suka membantu kesusahan orang-orang miskin; mereka yang seperti ini akan dimuliakan dalam hidup dan matinya."
	},
	{
		sloka: 'Sloka 167',
		ayat: "Biarpun orang itu pernah menjahatinya, pernah menghina, membuat sengsara, jika mereka datang padanya untuk minta pertolongan, akan tetap ditolong oleh orang yang berbudi luhur dan utama."
	}];
  $scope.bab17 = [
	{
		sloka: 'Sloka 168',
		ayat: "Produsen berhubungan dengan distributor dan konsumen; dokter berhubungan dengan apoteker dan pasien; suami berpasangan dengan istri; sedangkan bagi mereka yang sekarat dan hampir mati sedekah di masa sehat itulah yang selalu menemaninya."
	},
	{
		sloka: 'Sloka 169',
		ayat: "Sedekah yang dilakukan, pahalanya tidak akan dinikmati oleh ayah, ibu, atau sanak saudara lainnya, kebajikan itu akan dinikmati oleh si pelaku sedekah itu sendiri."
	},
	{
		sloka: 'Sloka 170',
		ayat: "Yang disebut sedekah oleh orang suci bijak adalah sifat yang tanpa iri dan dengki, serta ketaatan pada kebajikan dan kebenaran; sebab dari perilaku yang mulia itu akan diperolehlah pahala yang melimpah ruah."
	},
	{
		sloka: 'Sloka 171',
		ayat: "Orang suci berkata: 'kenikmatan hidup dibumi adalah pahala dari sedekah; kebijaksanaan dan kesadaran adalah pahala bakti kepada orang tua, sedangkan tindakan yang tidak membunuh dan menyiksa makhluk hidup menyebabkan umur panjang'."
	},
	{
		sloka: 'Sloka 172',
		ayat: "Di antara apapun di bumi ini, sangat sulitlah untuk bersedekah, sebab harta itu diperoleh dari hasil kerja keras; walau sesulit apapun janganlah pernah lupa untuk bersedekah."
	},
	{
		sloka: 'Sloka 173',
		ayat: "Orang-orang utama adalah orang yang dengan suka rela memberi sedekah kepada orang-orang yang memerlukan, tidak perduli besar ataukah kecil pemberian itu."
	},
	{
		sloka: 'Sloka 174',
		ayat: "Tujuan utama dari harta dan kekayaan rahmat Tuhan adalah untuk disedekahkan, namun apabila sedekah itu digembar-gemborkan, hilanglah makna dari sedekah yang dilakukan."
	},
	{
		sloka: 'Sloka 175',
		ayat: "Mereka yang berpengetahuan, akan merelakan harta kekayaannya untuk kepentingan dan kesejahteraan umum, bahkan bila perlu nyawanya pun akan dikorbankan; mereka yang berpengetahuan menyadari bahwa tiada yang kekal dalam hidup ini, maka dari itu demi kepentingan dan kesejahteraan umum, jangankan harta, nyawa akan rela diserahkannya."
	},
	{
		sloka: 'Sloka 176',
		ayat: "Ada orang dapat mempertahankan kekayaan dalam jangka waktu yang lama, yang lainnya hanya sekejap menjadi kaya; yang lama pasti panjang amal sedekahnya, sedangkan yang hanya sekejap tentu sekejap pula amal sedekahnya. Maka dari itu janganlah kikir, lakukan sedekah semampunya, dan nikmatilah kekayaanmu dalam jangka waktu yang lama."
	},
	{
		sloka: 'Sloka 177',
		ayat: "Pernikahan berguna untuk melanjutkan keturunan, kitab suci berguna untuk menuntun pada kebajikan dan kebenaran, sedangkan kekayaan itu boleh dinikmati; selebihnya disedekahkan."
	},
	{
		sloka: 'Sloka 178',
		ayat: "Apa gunanya harta kekayaan itu dinikmati jika tanpa adanya sedekah, apa gunanya kesaktian jika tidak untuk mengalahkan musuh, apa gunanya sastra-sastra itu jika tidak untuk menuntun pada perbuatan bajik dan benar, apa gunanya juga kebijaksanaan jika tidak untuk menaklukkan hawa nafsu yang negatif."
	},
	{
		sloka: 'Sloka 179',
		ayat: "Maka dari itu, orang kaya yang tidak melakukan sedekah, sesungguhnya ia telah mati dalam hidupnya, hanya lantaran masih bernafas saja ia dikatakan hidup."
	},
	{
		sloka: 'Sloka 180',
		ayat: "Jika tidak memiliki kekayaan materi, ciptakanlah rasa aman bagi makhluk hidup, sebab jika seseorang dapat membuat makhluk hidup terhindar dari ketakutan, inilah bentuk sedekah yang dapat mengalahkan sedekah-sedekah yang lain."
	},
	{
		sloka: 'Sloka 181',
		ayat: "Sedekah dapat dilakukan kapanpun, dimanapun, dan dalam bentuk apapun. Sedekah tanah, sedekah kesempatan, wahyu suci, harta benda, dan lain-lain."
	},
	{
		sloka: 'Sloka 182',
		ayat: "Sedekah makanan dan minuman kepada orang yang kelaparan dan kehausan, sedekah selimut dan pakaian kepada orang yang kedinginan, nilainya sama dengan sedekah dalam bentuk harta kekayaan."
	},
	{
		sloka: 'Sloka 183',
		ayat: "Dipercaya sedekah akan mendatangkan pahala yang besar apabila dilakukan ketika matahari berada di bagian paling selatan katulistiwa, ketika matahari berada di bagian paling utara katulistiwa, ketika matahari berada tepat di garis katulistiwa, pada saat gerhana bulan dan gerhana matahari."
	},
	{
		sloka: 'Sloka 184',
		ayat: "Sedekah yang tepat dan diberikan kepada orang yang tepat sudah pasti akan mendatangkan pahala yang besar, sedangkan sedekah yang tidak tepat dan diberikan kepada orang yang tidak tepat, walaupun dalam jumlah yang besar, akan mendatangkan pahala yang kecil. Intinya, besar kecil pahala tidak tergantung pada besar kecil sedekah, tapi pada tepat atau tidaknya sedekah itu."
	},
	{
		sloka: 'Sloka 185',
		ayat: "Jangan bersedekah kepada orang yang jahat dan kejam, jangan menggembar-gemborkan sedekah yang dilakukan. Jangan menerima sedekah dari orang jahat dan kejam, serta jangan pula berlindung kepadanya."
	},
	{
		sloka: 'Sloka 186',
		ayat: "Sedekah jangan diberikan secara ngawur, jika ingin bersedekah hendaknya berusahalah mencari orang yang benar-benar pantas menerimanya."
	},
	{
		sloka: 'Sloka 187',
		ayat: "Pahala yang besar akan segera didapatkan jika sedekah diberikan kepada orang miskin yang baik, orang-orang yang hidup kelaparan, dan kepada orang yang benar-benar memerlukan bantuan."
	},
	{
		sloka: 'Sloka 188',
		ayat: "Hendaknya sedekah diberikan bukan karena ingin mendapatkan pujian, bukan karena rasa takut, dan tidak menyimpan motif atau tujuan-tujuan tertentu."
	},
	{
		sloka: 'Sloka 189',
		ayat: "Jika ayah dan ibu meminta pemberian, jangankan dalam bentuk harta, nyawapun hendaknya dikorbankan saja."
	},
	{
		sloka: 'Sloka 190',
		ayat: "Hutang kepada orang tua tidak akan terbalaskan, walaupun si anak berusaha membalasnya setiap hari dalam seratus tahun. Sebab demikian banyak penderitaan, pengorbanan, dan usaha-usaha yang dilakukan oleh ibu dan ayah untuk membesarkan anak-anaknya."
	},
	{
		sloka: 'Sloka 191',
		ayat: "Hanya orang miskinlah yang patut diberikan sedekah, bukan kepada orang kaya. Seperti halnya obat hanya pantas diberikan kepada mereka yang sakit, menjadi tiada guna jika diberikan kepada yang sehat."
	},
	{
		sloka: 'Sloka 192',
		ayat: "Jika ada orang miskin, namun lantaran malu, ia tidak mau meminta sedekah; sang dermawan haruslah berusaha agar si miskin itu mau meminta dan menerima sedekahnya."
	},
	{
		sloka: 'Sloka 193',
		ayat: "Jangan sekali-kali marah kepada orang yang meminta sedekah, jangan mengusirnya, jangan menolak untuk memberi sedekah walau mungkin yang meminta sedekah itu dianggap hina oleh masyarakat, bahkan sedekah yang diberikan kepada anjing pun tidak akan sia-sia."
	},
	{
		sloka: 'Sloka 194',
		ayat: "Jangan gegabah mencela dan menolak kedatangan orang yang meminta sedekah, jangan pernah menolak harapan-harapan mereka; sebab seorang peminta-minta dengan harapannya akan sedekah, ia berkeadaan sama dengan seorang guru yang datang dengan ajaran tentang kebajikan dan kebenaran. Mereka yang datang meminta sedekah layaknya matahari yang datang setiap hari untuk menghilangkan kegelapan; bagaikan seorang tukang bersih kaca yang bertugas setiap hari untuk membersihkan kaca dari debu-debunya."
	},
	{
		sloka: 'Sloka 195',
		ayat: "Tidak ada dosa yang lebih besar dari orang yang berkata 'tidak' kepada orang yang meminta sedekah, bahkan dosa mereka yang berkata 'tidak' akan ditambahkan dengan dosa dari si peminta-minta itu."
	},
	{
		sloka: 'Sloka 196',
		ayat: "Orang miskin yang datang meminta sedekah kepada si kaya sesungguhnya adalah cermin guru yang bijaksana, sebab kedatangan si miskin seolah-olah menasehati si kaya agar menjaga hartanya dengan sedekah; sebab jika si kaya menjadi kikir, kekayaannya akan hilang dan ia akan menjadi miskin."
	},
	{
		sloka: 'Sloka 197',
		ayat: "Janganlah selalu memikirkan adanya pahala atau tidak adanya pahala saat bersedekah, hendaknya sedekah dilakukan semampu yang bisa dilakukan dan sedekah diberikan dalam bentuk yang layak disedekahkan. Sedekah seperti ini pasti berpahala."
	},
	{
		sloka: 'Sloka 198',
		ayat: "Adapun puncak dari sedekah adalah dalam bentuk emas (harta), sapi (ternak) dan tanah (tempat hunian atau tempat bercocok tanam). Sedekah seperti ini akan melenyapkan malapetaka dan mengantar ke surga."
	},
	{
		sloka: 'Sloka 199',
		ayat: "Hendaknya sedekah yang diberikan berupa uang atau barang-barang berharga, seperti emas, perak, permata, kain, dan tanah. Yang seperti inilah patut disedekahkan."
	},
	{
		sloka: 'Sloka 200',
		ayat: "Jika menyedekahkan lembu bule (ternak) hendaknya tanduk lembu tersebut dihiasi dengan emas beserta sebuah bejana dari kuningan untuk penampung susunya. Sedekah seperti ini akan menjadi nandini (lembu yang dapat memenuhi segala keinginan) di alam akherat nantinya."
	},
	{
		sloka: 'Sloka 201',
		ayat: "Jika yang disedekahkan dalam bentuk rempah-rempah (obat-obatan), dupa, harum-haruman (sarana sembahyang), pakaian atau kain, mereka yang melakukan sedekah seperti ini kelak akan terlahir menjadi orang yang berwajah tampan dan berfisik sehat."
	},
	{
		sloka: 'Sloka 202',
		ayat: "Inilah sedekah yang mudah cara memperolehnya, minyak, umbi-umbian (bahan makanan), air, lulur kaki, atau alat penerangan; mereka yang bersedekah seperti ini akan hidup senang, tenteram dan damai dengan sanak keluarganya."
	},
	{
		sloka: 'Sloka 203',
		ayat: "Jika ada orang yang memberikan sedekah air kepada orang-orang yang sedang kehausan, di akherat di tempat yang paling sulit air pun mereka yang bersedekah air tidak akan pernah kekurangan air."
	},
	{
		sloka: 'Sloka 204',
		ayat: "Adapun orang yang menyedekahkan penerangan kepada orang yang sedang melakukan perjalanan malam, kelak di kehidupan berikutnya akan memiliki mata yang bercahaya, wajah yang berseri dan karisma yang kuat."
	},
	{
		sloka: 'Sloka 205',
		ayat: "Jika ada orang yang menyedekahkan payung kepada orang yang kehujanan, di alam akherat mereka ini akan dipayungi oleh para bidadari/bidadara."
	},
	{
		sloka: 'Sloka 206',
		ayat: "Jika ada orang yang menyedekahkan alas kaki kepada orang yang sedang berjalan dan kepanasan, di alam akherat ia akan dihormati oleh para dewa."
	},
	{
		sloka: 'Sloka 207',
		ayat: "Besar kecil pahala dari sedekah dan derma, bukanlah disebabkan oleh banyak atau kurangnya jumlah yang dikorbankan, namun ikhlas atau tidak ikhlas hati dari si pemberi kala itu."
	},
	{
		sloka: 'Sloka 208',
		ayat: "Barang yang disenangi, barang yang disayangi, barang-barang yang berharga, barang yang berkeadaan seperti inilah yang paling baik untuk disedekahkan."
	},
	{
		sloka: 'Sloka 209',
		ayat: "Sedekah yang diberikan dengan tanpa diminta terlebih dahulu tergolong sedekah tingkat utama, sedangkan sedekah yang diberikan lantaran ada permintaan tergolong sedekah dalam tingkatan menengah."
	},
	{
		sloka: 'Sloka 210',
		ayat: "Sedekah yang diberikan dengan tidak tulus ikhlas, terpaksa, atau dengan kata-kata kasar/hinaan tergolong sedekah tingkat rendah dengan pahala sangat sedikit."
	},
	{
		sloka: 'Sloka 211',
		ayat: "Sedekah yang diberikan dengan motif/syarat tertentu (negatif) dan dilakukan dengan tidak tulus ikhlas adalah sedekah dalam tingkatan hina dan tidak ada pahalanya."
	},
	{
		sloka: 'Sloka 212',
		ayat: "Untuk berlatih, sedekahkanlah terlebih dahulu barang-barang yang kurang berharga, berikutnya barang berharga, setelah terbiasa barulah menyedekahkan barang-barang yang sangat berharga dan anda sukai."
	},
	{
		sloka: 'Sloka 213',
		ayat: "Apabila seseorang menasehati orang lain untuk bersedekah, sedangkan ia sendiri tidak melakukannya, maka apa yang dicita-citakannya, apa yang diidam-idamkannya tidak pernah akan terwujud."
	},
	{
		sloka: 'Sloka 214',
		ayat: "Jika ada orang bertekad dan berjanji untuk berbuat kebajikan (berdana/bersedekah), lalu ia tidak menepati janjinya itu, maka akan hilanglah pahala hasil dari sembahyangnya dan pahala dari amal dan jasanya."
	},
	{
		sloka: 'Sloka 215',
		ayat: "Pahala dari ketekunan memuja Tuhan dapat hilang seketika jika tidak menepati janji untuk bersedekah."
	},
	{
		sloka: 'Sloka 216',
		ayat: "Pahala dari amal dan jasa yang dilakukan seketika akan hilang jika tidak menepati janji untuk bersedekah."
	},
	{
		sloka: 'Sloka 217',
		ayat: "Mereka yang dalam hidupnya tidak melakukan perbuatan-perbuatan bajik dan benar akan takut menghadapi kematian, namun sebaliknya mereka yang telah melakukan perbuatan bajik dan benar justru akan merindukan datangnya kematian di hari tuanya."
	},
	{
		sloka: 'Sloka 218',
		ayat: "Orang yang belum melakukan perbuatan bajik dan benar dalam hidupnya, seringkali dapat tidur pulas. Masihkah mereka dapat tidur pulas, jika merenungi dan memahami apabila kematian itu dapat merenggut hidupnya setiap saat?"
	},
	{
		sloka: 'Sloka 219',
		ayat: "Apabila ada yang mendermakan makanan dengan tulus ikhlas, kepada orang yang sedang kelelahan, haus dan lapar; mereka akan memperoleh pahala yang besar di kemudian hari."
	},
	{
		sloka: 'Sloka 220',
		ayat: "Jika ada orang yang hidup miskin, sering kelaparan namun malu untuk meminta bantuan, lalu ada orang yang tanpa dengan diminta membantu mereka, amat besarlah pahala yang akan diperoleh si dermawan di kemudian hari."
	},
	{
		sloka: 'Sloka 221',
		ayat: "Sedekah makanan bagi mereka yang kelaparan dan kehausan dapat mengenyangkan seketika itu juga, bagi yang memberi sedekah, pahalanya dapat dinikmati seketika itu juga melalui ungkapan terima kasih yang tulus dari yang dibantunya dan menimbulkan perasaan senang di hati si pemberi dan si penerima."
	},
	{
		sloka: 'Sloka 222',
		ayat: "Bagi yang bersedih hati hiburlah, kepada yang kelelahan sediakan tempat istirahat, bagi yang kehausan berilah minuman, kepada yang kelaparan berilah makanan."
	},
	{
		sloka: 'Sloka 223',
		ayat: "Apapun bentuk pemberian, derma, ataukah sedekah, hendaknya selalu disertai dengan tutur kata yang manis, sapaan yang ramah, dan ketulus-ikhlasan hati."
	},
	{
		sloka: 'Sloka 224',
		ayat: "Tiga yang akan selalu tersedia di rumah orang yang baik budi, di antaranya: 1)makanan; 2) keramahan; dan 3) perlindungan."
	},
	{
		sloka: 'Sloka 225',
		ayat: "Mereka yang tidak melakukan yadnya/persembahan kehadapan Tuhan dan mereka yang tidak menjamu orang-orang yang bertamu ke rumahnya, manusia yang seperti ini tidak ada bedanya dengan raksasa."
	},
	{
		sloka: 'Sloka 226',
		ayat: "Kesenangan yang diperoleh hendaknya dinikmati bersama, makanan yang dimiliki hendaknya dinikmati bersama, keputusan hendaknya diambil bersama, demikian juga permasalahan hendaknya dipecahkan bersama; sungguh akan terasa janggal bangun paling dulu sementara yang lain masih tidur pulas."
	}];
  $scope.bab18 = [
	{
		sloka: 'Sloka 227',
		ayat: "Jangan hendaknya anda menjadikan ayah dan ibu anda layakya pembantu atau tukang masak, jangan makan sebelum ayah dan ibu anda makan, mereka yang baru makan setelah mendapat ijin dari ayah dan ibunya akan hidup dalam kesejahteraan di alam fana dan akherat."
	},
	{
		sloka: 'Sloka 228',
		ayat: "Seorang putra sejati adalah mereka yang melindungi orang-orang yang kesusahan, menyelamatkan orang-orang yang sengsara, dan bersedekah kepada orang-orang miskin."
	},
	{
		sloka: 'Sloka 229',
		ayat: "Seorang putra sejati adalah orang yang menjadi pelindung dari sanak saudaranya, ia hendaknya seperti Indra dewa hujan yang melindungi dan memelihara kelangsungan hidup di bumi, bagaikan pohon-pohon yang menjadi habitat burung-burung; demikianlah ia hendaknya menjadi sumber kehidupan dari orang-orang seisi rumahnya."
	},
	{
		sloka: 'Sloka 230',
		ayat: "Jika ada orang kaya yang tidak suka membantu sanak saudaranya, bahkan mereka membiarkan keluarganya hidup terlantar dan miskin; orang kaya yang seperti ini sungguh-sungguh berkeadaan hina di hadapan Tuhan."
	},
	{
		sloka: 'Sloka 231',
		ayat: "Ada empat kriteria orang yang patut diajak tinggal di dalam rumah anda, diantaranya: 1) seorang kerabat yang menderita; 2) orang bajik yang jatuh sengsara; 3) sahabat yang miskin; 4) adik perempuan yang mandul atau disia-siakan suaminya."
	},
	{
		sloka: 'Sloka 232',
		ayat: "Sedangkan yang tidak patut diajak berdiam di dalam rumah adalah: 1) orang yang pemalas; 2) orang yang rakus; 3) orang yang berkepribadian tercela; 4) orang yang licik; 5) orang yang selalu menentang peraturan; 6) orang yang tidak perduli keselamatan orang lain; 7) orang yang tidak tahu kelayakan waktu dan tempat; dan 8) orang yang suka berpakaian tidak senonoh."
	},
	{
		sloka: 'Sloka 233',
		ayat: "Janganlah ragu-ragu untuk mengajak seorang rohaniawan yang suci untuk tinggal dalam rumah anda, seorang guru yang memahami ilmu pengetahuan, siswa yang berbudi luhur, saudara sedarah, kerabat dan sahabat yang berkelakuan baik."
	},
	{
		sloka: 'Sloka 234',
		ayat: "Jika ada orang yang dengan pikiran, perkataan, dan perbuatannya menghianati guru, menghianati ibu dan ayahnya, dosa mereka ini sangatlah besar, bahkan lebih besar dari dosa akibat menggugurkan kandungan."
	},
	{
		sloka: 'Sloka 235',
		ayat: "Ibu dan ayah adalah sumber dari kehidupan, sedangkan guru adalah sumber pengetahuan rohani yang mengajarkan hakekat hidup."
	},
	{
		sloka: 'Sloka 236',
		ayat: "Guru terlebih dahulu dihormati sebagai penuntun hidup dan kehidupan, sebagai pemberi pengetahuan dan kerohanian, berikutnya hormatilah ibu dan ayah sebagai orang yang melahirkan dan menghidupi secara material."
	},
	{
		sloka: 'Sloka 237',
		ayat: "Janganlah menjawab pertanyaan guru dengan cara bercanda, apabila beliau bersedih, gusar, dan marah, hiburlah dengan kata-kata yang manis menyegarkan."
	},
	{
		sloka: 'Sloka 238',
		ayat: "Janganlah menghina guru jika beliau ada kesalahan, sebab orang yang menghina gurunya akan dijauhkan dari hakekat hidup, berumur pendek dan masuk neraka."
	},
	{
		sloka: 'Sloka 239',
		ayat: "Mereka yang hormat kepada ayah dan ibunya, berkeadaan sama dengan seorang brahmana/spiritualis yang teguh dengan tapanya, kuat menjaga kesucian dan berada pada jalan kebajikan dan kebenaran."
	},
	{
		sloka: 'Sloka 240',
		ayat: "Sebab seorang ibu menanggung kewajiban yang lebih berat dari pada bumi, sedangkan seorang ayah berfikir lebih tinggi dari langit, lebih cepat dari angin, dan lebih banyak dari rumput demi kesejahteraan dan keselamatan anak, istri, dan keluarganya. Menyadari itu, seorang anak hendaknya menghormati dan bakti secara bersungguh-sungguh kepada orang tuanya."
	},
	{
		sloka: 'Sloka 241',
		ayat: "Barang siapa bakti tulus kepada orang tuanya dan selalu berusaha untuk menyenangkan serta memuaskan hati mereka, orang tersebut akan terpuji dan menjadi bajik."
	},
	{
		sloka: 'Sloka 242',
		ayat: "Yang tergolong ayah adalah: orang yang memberikan tubuh, yang memberikan hidup (ayah biologis), yang memberi makan, dan yang mengasuh."
	},
	{
		sloka: 'Sloka 243',
		ayat: "Seorang anak hendaknya membuat ayahnya puas, sedangkan kewajiban ayah adalah selalu berusaha untuk mensejahterakan anaknya."
	},
	{
		sloka: 'Sloka 244',
		ayat: "Baik pintar atau bodoh, berperilaku bajik atau jahat, kaya atau miskin; cinta seorang ibu sama dan tidak pernah berkurang."
	},
	{
		sloka: 'Sloka 245',
		ayat: "Seorang ayah, seberapa miskin pun keberadaannya, ia akan selalu berusaha untuk mencari penghidupan untuk anak-anaknya dan berusaha untuk menyenangkan mereka dengan pemberian dan hadiah."
	},
	{
		sloka: 'Sloka 246',
		ayat: "Seorang anak yang tidak menyia-nyiakan hidup ibunya setelah tua, tidak meninggalkan ibunya, setia dan bakti dengan hati yang tulus, anak yang memperlakukan ibu layaknya dewa, pasti akan berumur panjang dan memperoleh ganjaran surga di alam akherat."
	},
	{
		sloka: 'Sloka 247',
		ayat: "Anak yang ditinggal ibunya atau yang mengusir ibunya, anak yang seperti ini seberapapun kayanya adalah orang yang miskin, seberapapun bahagianya adalah orang sengsara, bagi mereka dunia akan menjadi sangat sepi walau berada dalam hiruk-pikuk keramaian."
	},
	{
		sloka: 'Sloka 248',
		ayat: "Oleh karenanya, baktilah pada orang tua bahkan sembahlah mereka dengan ketulusan hati. Jika diminta atau jika tidak diminta sekalipun, tawarkan terlebih dahulu keinginan untuk mengantar kemanapun beliau hendak pergi, jika berkenan antarlah beliau dengan hati yang tulus."
	},
	{
		sloka: 'Sloka 249',
		ayat: "Jika berhadapan dengan orang tua (ayah/ibu), si anak akan kehilangan jiwanya, tapi jika si anak sujud dengan hormat kepada orang tuannya, kembalilah jiwa si anak ke tubuhnya."
	},
	{
		sloka: 'Sloka 250',
		ayat: "Jika seorang anak bakti tulus kepada orang tuanya, mereka akan memperoleh empat macam pahala berupa: 1) pujian; 2) hidup bahagia dan panjang umur; 3) teman yang setia dan kekuasaan; 4) jasa dan pertolongan"
	},
	{
		sloka: 'Sloka 251',
		ayat: "Orang yang santun adalah orang yang menyesuaikan diri dengan aturan norma dan etika yang berlaku di masyarakatnya; demikian juga hendaknya perilaku disesuaikan dengan umur; perilaku dan umur disesuaikan dengan harta kepunyaan; umur, perilaku dan harta, disesuaikan dengan pakaian dan perhiasan yang dipergunakan. Orang yang mampu menyesuaikan semuanya adalah orang yang berkeadaan sadar."
	},
	{
		sloka: 'Sloka 252',
		ayat: "Hendaknya manusia senantiasa berusaha untuk menyenangkan hati dari semua orang, terutama orang-orang yang sedang kelelahan, orang yang sedang sakit, orang yang terhina dan dikucilkan, orang yang hidup miskin, orang yang sedang ketakutan, orang yang kelaparan, serta orang yang sedang menderita bencana, musibah atau nasib malang."
	},
	{
		sloka: 'Sloka 253',
		ayat: "Hilangkanlah kemalasan dan keengganan hati, berusahalah untuk belajar perihal kebajikan dan kebenaran dari kitab suci, kitab hukum, norma dan kesusilaan. Berlatihlah kebijaksanaan untuk menjadi manusia bajik dan benar."
	},
	{
		sloka: 'Sloka 254',
		ayat: "Sebab jika tersesat dari kebijaksanaan, sia-sialah kebajikan dan kebenaran yang telah dilakukan, kelak pahala dari perbuatan yang positif tidak akan mungkin diperoleh. Akan halnya orang yang teguh dalam kebijaksanaan, sempurnalah segala perbuatan bajiknya."
	},
	{
		sloka: 'Sloka 255',
		ayat: "Hendaknya seorang suami dan istri yang menghendaki hidup langgeng dalam berumah tangga, menghindari untuk melakukan senggama pada bulan mati (tilem), paruh terang dan paruh gelap ke delapan (8), paruh terang dan paruh gelap ke empat belas/14 (prewani) serta pada bulan purnama."
	},
	{
		sloka: 'Sloka 227',
		ayat: "Jangan hendaknya anda menjadikan ayah dan ibu anda layakya pembantu atau tukang masak, jangan makan sebelum ayah dan ibu anda makan, mereka yang baru makan setelah mendapat ijin dari ayah dan ibunya akan hidup dalam kesejahteraan di alam fana dan akherat."
	},
	{
		sloka: 'Sloka 228',
		ayat: "Seorang putra sejati adalah mereka yang melindungi orang-orang yang kesusahan, menyelamatkan orang-orang yang sengsara, dan bersedekah kepada orang-orang miskin."
	},
	{
		sloka: 'Sloka 229',
		ayat: "Seorang putra sejati adalah orang yang menjadi pelindung dari sanak saudaranya, ia hendaknya seperti Indra dewa hujan yang melindungi dan memelihara kelangsungan hidup di bumi, bagaikan pohon-pohon yang menjadi habitat burung-burung; demikianlah ia hendaknya menjadi sumber kehidupan dari orang-orang seisi rumahnya."
	},
	{
		sloka: 'Sloka 230',
		ayat: "Jika ada orang kaya yang tidak suka membantu sanak saudaranya, bahkan mereka membiarkan keluarganya hidup terlantar dan miskin; orang kaya yang seperti ini sungguh-sungguh berkeadaan hina di hadapan Tuhan."
	},
	{
		sloka: 'Sloka 231',
		ayat: "Ada empat kriteria orang yang patut diajak tinggal di dalam rumah anda, diantaranya: 1) seorang kerabat yang menderita; 2) orang bajik yang jatuh sengsara; 3) sahabat yang miskin; 4) adik perempuan yang mandul atau disia-siakan suaminya."
	},
	{
		sloka: 'Sloka 232',
		ayat: "Sedangkan yang tidak patut diajak berdiam di dalam rumah adalah: 1) orang yang pemalas; 2) orang yang rakus; 3) orang yang berkepribadian tercela; 4) orang yang licik; 5) orang yang selalu menentang peraturan; 6) orang yang tidak perduli keselamatan orang lain; 7) orang yang tidak tahu kelayakan waktu dan tempat; dan 8) orang yang suka berpakaian tidak senonoh."
	},
	{
		sloka: 'Sloka 233',
		ayat: "Janganlah ragu-ragu untuk mengajak seorang rohaniawan yang suci untuk tinggal dalam rumah anda, seorang guru yang memahami ilmu pengetahuan, siswa yang berbudi luhur, saudara sedarah, kerabat dan sahabat yang berkelakuan baik."
	},
	{
		sloka: 'Sloka 234',
		ayat: "Jika ada orang yang dengan pikiran, perkataan, dan perbuatannya menghianati guru, menghianati ibu dan ayahnya, dosa mereka ini sangatlah besar, bahkan lebih besar dari dosa akibat menggugurkan kandungan."
	},
	{
		sloka: 'Sloka 235',
		ayat: "Ibu dan ayah adalah sumber dari kehidupan, sedangkan guru adalah sumber pengetahuan rohani yang mengajarkan hakekat hidup."
	},
	{
		sloka: 'Sloka 236',
		ayat: "Guru terlebih dahulu dihormati sebagai penuntun hidup dan kehidupan, sebagai pemberi pengetahuan dan kerohanian, berikutnya hormatilah ibu dan ayah sebagai orang yang melahirkan dan menghidupi secara material."
	},
	{
		sloka: 'Sloka 237',
		ayat: "Janganlah menjawab pertanyaan guru dengan cara bercanda, apabila beliau bersedih, gusar, dan marah, hiburlah dengan kata-kata yang manis menyegarkan."
	},
	{
		sloka: 'Sloka 238',
		ayat: "Janganlah menghina guru jika beliau ada kesalahan, sebab orang yang menghina gurunya akan dijauhkan dari hakekat hidup, berumur pendek dan masuk neraka."
	},
	{
		sloka: 'Sloka 239',
		ayat: "Mereka yang hormat kepada ayah dan ibunya, berkeadaan sama dengan seorang brahmana/spiritualis yang teguh dengan tapanya, kuat menjaga kesucian dan berada pada jalan kebajikan dan kebenaran."
	},
	{
		sloka: 'Sloka 240',
		ayat: "Sebab seorang ibu menanggung kewajiban yang lebih berat dari pada bumi, sedangkan seorang ayah berfikir lebih tinggi dari langit, lebih cepat dari angin, dan lebih banyak dari rumput demi kesejahteraan dan keselamatan anak, istri, dan keluarganya. Menyadari itu, seorang anak hendaknya menghormati dan bakti secara bersungguh-sungguh kepada orang tuanya."
	},
	{
		sloka: 'Sloka 241',
		ayat: "Barang siapa bakti tulus kepada orang tuanya dan selalu berusaha untuk menyenangkan serta memuaskan hati mereka, orang tersebut akan terpuji dan menjadi bajik."
	},
	{
		sloka: 'Sloka 242',
		ayat: "Yang tergolong ayah adalah: orang yang memberikan tubuh, yang memberikan hidup (ayah biologis), yang memberi makan, dan yang mengasuh."
	},
	{
		sloka: 'Sloka 243',
		ayat: "Seorang anak hendaknya membuat ayahnya puas, sedangkan kewajiban ayah adalah selalu berusaha untuk mensejahterakan anaknya."
	},
	{
		sloka: 'Sloka 244',
		ayat: "Baik pintar atau bodoh, berperilaku bajik atau jahat, kaya atau miskin; cinta seorang ibu sama dan tidak pernah berkurang."
	},
	{
		sloka: 'Sloka 245',
		ayat: "Seorang ayah, seberapa miskin pun keberadaannya, ia akan selalu berusaha untuk mencari penghidupan untuk anak-anaknya dan berusaha untuk menyenangkan mereka dengan pemberian dan hadiah."
	},
	{
		sloka: 'Sloka 246',
		ayat: "Seorang anak yang tidak menyia-nyiakan hidup ibunya setelah tua, tidak meninggalkan ibunya, setia dan bakti dengan hati yang tulus, anak yang memperlakukan ibu layaknya dewa, pasti akan berumur panjang dan memperoleh ganjaran surga di alam akherat."
	},
	{
		sloka: 'Sloka 247',
		ayat: "Anak yang ditinggal ibunya atau yang mengusir ibunya, anak yang seperti ini seberapapun kayanya adalah orang yang miskin, seberapapun bahagianya adalah orang sengsara, bagi mereka dunia akan menjadi sangat sepi walau berada dalam hiruk-pikuk keramaian."
	},
	{
		sloka: 'Sloka 248',
		ayat: "Oleh karenanya, baktilah pada orang tua bahkan sembahlah mereka dengan ketulusan hati. Jika diminta atau jika tidak diminta sekalipun, tawarkan terlebih dahulu keinginan untuk mengantar kemanapun beliau hendak pergi, jika berkenan antarlah beliau dengan hati yang tulus."
	},
	{
		sloka: 'Sloka 249',
		ayat: "Jika berhadapan dengan orang tua (ayah/ibu), si anak akan kehilangan jiwanya, tapi jika si anak sujud dengan hormat kepada orang tuannya, kembalilah jiwa si anak ke tubuhnya."
	},
	{
		sloka: 'Sloka 250',
		ayat: "Jika seorang anak bakti tulus kepada orang tuanya, mereka akan memperoleh empat macam pahala berupa: 1) pujian; 2) hidup bahagia dan panjang umur; 3) teman yang setia dan kekuasaan; 4) jasa dan pertolongan"
	},
	{
		sloka: 'Sloka 251',
		ayat: "Orang yang santun adalah orang yang menyesuaikan diri dengan aturan norma dan etika yang berlaku di masyarakatnya; demikian juga hendaknya perilaku disesuaikan dengan umur; perilaku dan umur disesuaikan dengan harta kepunyaan; umur, perilaku dan harta, disesuaikan dengan pakaian dan perhiasan yang dipergunakan. Orang yang mampu menyesuaikan semuanya adalah orang yang berkeadaan sadar."
	},
	{
		sloka: 'Sloka 252',
		ayat: "Hendaknya manusia senantiasa berusaha untuk menyenangkan hati dari semua orang, terutama orang-orang yang sedang kelelahan, orang yang sedang sakit, orang yang terhina dan dikucilkan, orang yang hidup miskin, orang yang sedang ketakutan, orang yang kelaparan, serta orang yang sedang menderita bencana, musibah atau nasib malang."
	},
	{
		sloka: 'Sloka 253',
		ayat: "Hilangkanlah kemalasan dan keengganan hati, berusahalah untuk belajar perihal kebajikan dan kebenaran dari kitab suci, kitab hukum, norma dan kesusilaan. Berlatihlah kebijaksanaan untuk menjadi manusia bajik dan benar."
	},
	{
		sloka: 'Sloka 254',
		ayat: "Sebab jika tersesat dari kebijaksanaan, sia-sialah kebajikan dan kebenaran yang telah dilakukan, kelak pahala dari perbuatan yang positif tidak akan mungkin diperoleh. Akan halnya orang yang teguh dalam kebijaksanaan, sempurnalah segala perbuatan bajiknya."
	},
	{
		sloka: 'Sloka 255',
		ayat: "Hendaknya seorang suami dan istri yang menghendaki hidup langgeng dalam berumah tangga, menghindari untuk melakukan senggama pada bulan mati (tilem), paruh terang dan paruh gelap ke delapan (8), paruh terang dan paruh gelap ke empat belas/14 (prewani) serta pada bulan purnama."
	},
	{
		sloka: 'Sloka 227',
		ayat: "Jangan hendaknya anda menjadikan ayah dan ibu anda layakya pembantu atau tukang masak, jangan makan sebelum ayah dan ibu anda makan, mereka yang baru makan setelah mendapat ijin dari ayah dan ibunya akan hidup dalam kesejahteraan di alam fana dan akherat."
	},
	{
		sloka: 'Sloka 228',
		ayat: "Seorang putra sejati adalah mereka yang melindungi orang-orang yang kesusahan, menyelamatkan orang-orang yang sengsara, dan bersedekah kepada orang-orang miskin."
	},
	{
		sloka: 'Sloka 229',
		ayat: "Seorang putra sejati adalah orang yang menjadi pelindung dari sanak saudaranya, ia hendaknya seperti Indra dewa hujan yang melindungi dan memelihara kelangsungan hidup di bumi, bagaikan pohon-pohon yang menjadi habitat burung-burung; demikianlah ia hendaknya menjadi sumber kehidupan dari orang-orang seisi rumahnya."
	},
	{
		sloka: 'Sloka 230',
		ayat: "Jika ada orang kaya yang tidak suka membantu sanak saudaranya, bahkan mereka membiarkan keluarganya hidup terlantar dan miskin; orang kaya yang seperti ini sungguh-sungguh berkeadaan hina di hadapan Tuhan."
	},
	{
		sloka: 'Sloka 231',
		ayat: "Ada empat kriteria orang yang patut diajak tinggal di dalam rumah anda, diantaranya: 1) seorang kerabat yang menderita; 2) orang bajik yang jatuh sengsara; 3) sahabat yang miskin; 4) adik perempuan yang mandul atau disia-siakan suaminya."
	},
	{
		sloka: 'Sloka 232',
		ayat: "Sedangkan yang tidak patut diajak berdiam di dalam rumah adalah: 1) orang yang pemalas; 2) orang yang rakus; 3) orang yang berkepribadian tercela; 4) orang yang licik; 5) orang yang selalu menentang peraturan; 6) orang yang tidak perduli keselamatan orang lain; 7) orang yang tidak tahu kelayakan waktu dan tempat; dan 8) orang yang suka berpakaian tidak senonoh."
	},
	{
		sloka: 'Sloka 233',
		ayat: "Janganlah ragu-ragu untuk mengajak seorang rohaniawan yang suci untuk tinggal dalam rumah anda, seorang guru yang memahami ilmu pengetahuan, siswa yang berbudi luhur, saudara sedarah, kerabat dan sahabat yang berkelakuan baik."
	},
	{
		sloka: 'Sloka 234',
		ayat: "Jika ada orang yang dengan pikiran, perkataan, dan perbuatannya menghianati guru, menghianati ibu dan ayahnya, dosa mereka ini sangatlah besar, bahkan lebih besar dari dosa akibat menggugurkan kandungan."
	},
	{
		sloka: 'Sloka 235',
		ayat: "Ibu dan ayah adalah sumber dari kehidupan, sedangkan guru adalah sumber pengetahuan rohani yang mengajarkan hakekat hidup."
	},
	{
		sloka: 'Sloka 236',
		ayat: "Guru terlebih dahulu dihormati sebagai penuntun hidup dan kehidupan, sebagai pemberi pengetahuan dan kerohanian, berikutnya hormatilah ibu dan ayah sebagai orang yang melahirkan dan menghidupi secara material."
	},
	{
		sloka: 'Sloka 237',
		ayat: "Janganlah menjawab pertanyaan guru dengan cara bercanda, apabila beliau bersedih, gusar, dan marah, hiburlah dengan kata-kata yang manis menyegarkan."
	},
	{
		sloka: 'Sloka 238',
		ayat: "Janganlah menghina guru jika beliau ada kesalahan, sebab orang yang menghina gurunya akan dijauhkan dari hakekat hidup, berumur pendek dan masuk neraka."
	},
	{
		sloka: 'Sloka 239',
		ayat: "Mereka yang hormat kepada ayah dan ibunya, berkeadaan sama dengan seorang brahmana/spiritualis yang teguh dengan tapanya, kuat menjaga kesucian dan berada pada jalan kebajikan dan kebenaran."
	},
	{
		sloka: 'Sloka 240',
		ayat: "Sebab seorang ibu menanggung kewajiban yang lebih berat dari pada bumi, sedangkan seorang ayah berfikir lebih tinggi dari langit, lebih cepat dari angin, dan lebih banyak dari rumput demi kesejahteraan dan keselamatan anak, istri, dan keluarganya. Menyadari itu, seorang anak hendaknya menghormati dan bakti secara bersungguh-sungguh kepada orang tuanya."
	},
	{
		sloka: 'Sloka 241',
		ayat: "Barang siapa bakti tulus kepada orang tuanya dan selalu berusaha untuk menyenangkan serta memuaskan hati mereka, orang tersebut akan terpuji dan menjadi bajik."
	},
	{
		sloka: 'Sloka 242',
		ayat: "Yang tergolong ayah adalah: orang yang memberikan tubuh, yang memberikan hidup (ayah biologis), yang memberi makan, dan yang mengasuh."
	},
	{
		sloka: 'Sloka 243',
		ayat: "Seorang anak hendaknya membuat ayahnya puas, sedangkan kewajiban ayah adalah selalu berusaha untuk mensejahterakan anaknya."
	},
	{
		sloka: 'Sloka 244',
		ayat: "Baik pintar atau bodoh, berperilaku bajik atau jahat, kaya atau miskin; cinta seorang ibu sama dan tidak pernah berkurang."
	},
	{
		sloka: 'Sloka 245',
		ayat: "Seorang ayah, seberapa miskin pun keberadaannya, ia akan selalu berusaha untuk mencari penghidupan untuk anak-anaknya dan berusaha untuk menyenangkan mereka dengan pemberian dan hadiah."
	},
	{
		sloka: 'Sloka 246',
		ayat: "Seorang anak yang tidak menyia-nyiakan hidup ibunya setelah tua, tidak meninggalkan ibunya, setia dan bakti dengan hati yang tulus, anak yang memperlakukan ibu layaknya dewa, pasti akan berumur panjang dan memperoleh ganjaran surga di alam akherat."
	},
	{
		sloka: 'Sloka 247',
		ayat: "Anak yang ditinggal ibunya atau yang mengusir ibunya, anak yang seperti ini seberapapun kayanya adalah orang yang miskin, seberapapun bahagianya adalah orang sengsara, bagi mereka dunia akan menjadi sangat sepi walau berada dalam hiruk-pikuk keramaian."
	},
	{
		sloka: 'Sloka 248',
		ayat: "Oleh karenanya, baktilah pada orang tua bahkan sembahlah mereka dengan ketulusan hati. Jika diminta atau jika tidak diminta sekalipun, tawarkan terlebih dahulu keinginan untuk mengantar kemanapun beliau hendak pergi, jika berkenan antarlah beliau dengan hati yang tulus."
	},
	{
		sloka: 'Sloka 249',
		ayat: "Jika berhadapan dengan orang tua (ayah/ibu), si anak akan kehilangan jiwanya, tapi jika si anak sujud dengan hormat kepada orang tuannya, kembalilah jiwa si anak ke tubuhnya."
	},
	{
		sloka: 'Sloka 250',
		ayat: "Jika seorang anak bakti tulus kepada orang tuanya, mereka akan memperoleh empat macam pahala berupa: 1) pujian; 2) hidup bahagia dan panjang umur; 3) teman yang setia dan kekuasaan; 4) jasa dan pertolongan"
	},
	{
		sloka: 'Sloka 251',
		ayat: "Orang yang santun adalah orang yang menyesuaikan diri dengan aturan norma dan etika yang berlaku di masyarakatnya; demikian juga hendaknya perilaku disesuaikan dengan umur; perilaku dan umur disesuaikan dengan harta kepunyaan; umur, perilaku dan harta, disesuaikan dengan pakaian dan perhiasan yang dipergunakan. Orang yang mampu menyesuaikan semuanya adalah orang yang berkeadaan sadar."
	},
	{
		sloka: 'Sloka 252',
		ayat: "Hendaknya manusia senantiasa berusaha untuk menyenangkan hati dari semua orang, terutama orang-orang yang sedang kelelahan, orang yang sedang sakit, orang yang terhina dan dikucilkan, orang yang hidup miskin, orang yang sedang ketakutan, orang yang kelaparan, serta orang yang sedang menderita bencana, musibah atau nasib malang."
	},
	{
		sloka: 'Sloka 253',
		ayat: "Hilangkanlah kemalasan dan keengganan hati, berusahalah untuk belajar perihal kebajikan dan kebenaran dari kitab suci, kitab hukum, norma dan kesusilaan. Berlatihlah kebijaksanaan untuk menjadi manusia bajik dan benar."
	},
	{
		sloka: 'Sloka 254',
		ayat: "Sebab jika tersesat dari kebijaksanaan, sia-sialah kebajikan dan kebenaran yang telah dilakukan, kelak pahala dari perbuatan yang positif tidak akan mungkin diperoleh. Akan halnya orang yang teguh dalam kebijaksanaan, sempurnalah segala perbuatan bajiknya."
	},
	{
		sloka: 'Sloka 255',
		ayat: "Hendaknya seorang suami dan istri yang menghendaki hidup langgeng dalam berumah tangga, menghindari untuk melakukan senggama pada bulan mati (tilem), paruh terang dan paruh gelap ke delapan (8), paruh terang dan paruh gelap ke empat belas/14 (prewani) serta pada bulan purnama."
	}];
  $scope.bab19 = [
	{
		sloka: 'Sloka 256',
		ayat: "Jika ingin memperoleh surga hendaknya janganlah minum-minuman keras (termasuk narkoba dan obat-obatan terlarang), jangan berbohong, jangan menginginkan pasangan orang (selingkuh), jangan mencuri, jangan menyiksa dan membunuh."
	},
	{
		sloka: 'Sloka 257',
		ayat: "Hendaknya makanlah makanan yang menyehatkan, pakailah pakaian dan perhiasan yang pantas, jangan berfoya-foya dan mabuk-mabukkan, jangan malas dan terlalu banyak tidur, jika masih menginginkan surga."
	},
	{
		sloka: 'Sloka 258',
		ayat: "Selalu berlatih mengendalikan nafsu (yama) dan teguhkan mental (niyama). Mereka yang berlatih mengendalikan nafsu indrawinya namun tidak memiliki keteguhan mental/hati niscaya akan gagal dalam usahanya."
	},
	{
		sloka: 'Sloka 259',
		ayat: "Ada sepuluh brata yang hendaknya dilakukan (yama): 1) jangan mementingkan diri sendiri; 2) tahan menghadapi cobaan hidup; 3) tidak berdusta; 4) tidak menyiksa dan membunuh makhluk hidup; 5) mampu menasehati diri sendiri (belajar dari pengalaman); 6) jujur dan selalu berterus terang; 7) berbelas kasih melihat penderitaan manusia dan makhluk hidup lainnya; 8) berhati bersih dan berpikir jernih; 9) berekspresi dan bertutur kata manis; dan 10) berbudi halus."
	},
	{
		sloka: 'Sloka 260',
		ayat: "Sepuluh brata yang hendaknya dikerjakan (niyama): 1) sedekah; 2) sembahyang; 3) pengekangan nafsu; 4) perenungan; 5) mempelajari kitab suci; 6) pengendalian birahi; 7) keteguhan hati; 8) puasa; 9) pengendalian kata-kata; 10) penyucian diri lahir batin."
	}];
  $scope.bab20 = [
	{
		sloka: 'Sloka 261',
		ayat: "Harta yang diperoleh haruslah berlandaskan pada kebajikan dan kebenaran. Setelah keuntungan/hasil usaha diperoleh, hendaknya penggunaannya dibagi dalam tiga kategori."
	},
	{
		sloka: 'Sloka 262',
		ayat: "Bagian pertama untuk mengamalkan kebajikan dan kebenaran; bagian kedua untuk memenuhi hidup, kesenangan dan rekreasi; sedangkan bagian ketiga untuk menjaga kelangsungan usaha."
	},
	{
		sloka: 'Sloka 263',
		ayat: "Keuntungan usaha yang berlandaskan pada kebajikan dan kebenaran akan melahirkan kebahagiaan surgawi; sedangkan keuntungan yang diperoleh dari cara-cara licik dan jahat akan melahirkan kesengsaraan dan neraka."
	},
	{
		sloka: 'Sloka 264',
		ayat: "Jika ada orang mencari untung dari tindakan-tindakan licik dan jahat, lalu ia mendermakannya untuk tujuan-tujuan baik; lebih baik jangan melakukan usaha itu walau dengan tujuan-tujuan mulia; sebab keberadaannya sama saja dengan mencemari sesuatu yang bersih dengan sesuatu yang kotor."
	},
	{
		sloka: 'Sloka 265',
		ayat: "Karena harta kekayaan yang suci adalah harta kekayaan yang diperoleh dari cara-cara bajik dan benar; harta kekayaan kotor adalah harta kekayaan yang diperoleh dengan cara-cara keji dan jahat."
	},
	{
		sloka: 'Sloka 266',
		ayat: "Hendaknya jangan pernah menginginkan harta kekayaan yang diperoleh dengan cara licik dan jahat, seperti uang hasil penyimpangan hukum dan uang pemberian musuh."
	},
	{
		sloka: 'Sloka 267',
		ayat: "Orang mulia sekalipun, jika berkeinginan untuk merampas harta orang lain, niscaya akan hilanglah kearifannya. Apabila kearifan itu telah hilang, maka lenyap jugalah kemuliaan dan keagungannya."
	},
	{
		sloka: 'Sloka 268',
		ayat: "Tiga merupakan tujuan hidup ini, yakni kebajikan/kebenaran, harta/kekayaan, dan kesenangan/keamanan; janganlah hendaknya ketiga dari tujuan hidup itu dikotori oleh kejahatan."
	},
	{
		sloka: 'Sloka 269',
		ayat: "Jangan biarkan waktu itu berlalu tanpa guna, manfaatkanlah waktu itu agar berdaya guna dan bermanfaat; akan sangat tepat jika waktu itu dipakai dalam pelaksanaan kebajikan sekaligus pencarian harta dan perolehan kesenangan. Siapa yang tahu batas hidup dan mati? Oleh karenanya maanfaatkanlah dengan sebaik-baiknya waktu itu, jangan menunda-nunda dan membuang-buang waktu, mumpung masih hidup."
	},
	{
		sloka: 'Sloka 270',
		ayat: "Orang yang gagal dalam pelaksanaan kebajikan/kebenaran, gagal dalam menyedekahkan harta/kekayaan, gagal dalam memberi kesenangan/keamanan bagi makhluk hidup lainnya, dan juga gagal menuju kemerdekaan batin; tanpa guna keberadaannya di bumi ini, mereka hidup lalu mati dimakan waktu."
	},
	{
		sloka: 'Sloka 271',
		ayat: "Oleh sebab itu, bersedekahlah kepada orang-orang yang patut diberikan sedekah, berikanlah kesenangan kepada orang-orang yang patut memperoleh kesenangan, ingat kematian datang tanpa disangka-sangka."
	}];
  $scope.bab21 = [
	{
		sloka: 'Sloka 272',
		ayat: "Ada orang yang senang saat ini, saat yang lain tidak senang; ada yang saat lain senang, saat ini tidak senang; ada senang saat ini dan saat yang lain pun senang; ada juga yang tidak senang saat ini pun tidak senang pada saat yang lainnya."
	},
	{
		sloka: 'Sloka 273',
		ayat: "Yang disebut dengan senang saat ini, hidup kaya raya dengan hartanya yang berlimpah ruah, namun hanya dinikmati untuk dirinya sendiri dan tidak pernah berkorban untuk kepentingan bajik dan benar. Orang seperti ini disebut dengan senang saat ini saja."
	},
	{
		sloka: 'Sloka 274',
		ayat: "Sedangkan orang yang kontemplatif, berpantang berbuat jahat, tekun dalam ilmu pengetahuan, menguasai hawa nafsu, kasih terhadap semua makhluk. Orang seperti ini akan memperoleh kesenangan disaat yang lain."
	},
	{
		sloka: 'Sloka 275',
		ayat: "Berikut adalah orang yang dinyatakan akan memperoleh kesenangan sekarang dan di kemudian hari: selalu berusaha giat melakukan kebajikan dan kebenaran, dengan kebenaran pula harta kekayaan dicarinya, lalu kenikmatan dinikmatinya dengan cara yang benar, tekun bersembahyang ke hadapan Tuhan dan leluhur, bakti kepada orang tua serta orang suci."
	},
	{
		sloka: 'Sloka 276',
		ayat: "Mereka yang tidak mempelajari ilmu pengetahuan, tidak berpantang/puasa, tidak melakukan sedekah, tidak sembahyang, tidak bersyukur, selalu berbuat jahat; mereka yang hidup seperti ini tidak akan memperoleh kesenangan saat ini pun saat yang lainnya."
	}];
  $scope.bab22 = [
	{
		sloka: 'Sloka 277',
		ayat: "Mereka yang tidak dirasuki oleh amarah dan kebencian, mereka yang mencintai kebenaran, tetap teguh dalam pengendalian indrawi, mengasihi segala makhluk seperti mengasihi diri sendiri; orang yang melakukan hal tersebut akan memperoleh pahala yang sama dengan orang yang tekun mengunjungi dan bersembahyang ke tempat-tempat suci."
	},
	{
		sloka: 'Sloka 278',
		ayat: "Berikut adalah orang yang akan memperoleh azab yang sama seperti keadaan orang yang tidak bersembahyang dan mengunjungi tempat-tempat suci: tidak penah berpuasa, tidak menyucikan rohani dan jasmani, tidak bersedekah, dan sering berbuat jahat."
	},
	{
		sloka: 'Sloka 279',
		ayat: "Keutamaan berkeliling untuk berkunjung dan sembahyang ke tempat-tempat suci kenyataannya lebih utama dari kurban, sebab ia bisa dilakukan oleh mereka yang miskin sekalipun; sedangkan kurban hanya bisa dilakukan oleh mereka yang berharta."
	}];
  $scope.bab23 = [
	{
		sloka: 'Sloka 280',
		ayat: "Miskin kebajikan sama dengan kematian; keadaannya bagaikan wilayah luas dengan penduduk yang banyak namun tanpa pemimpin, bagaikan upacara kematian tanpa doa-doa, bagaikan upacara besar tanpa sedekah."
	},
	{
		sloka: 'Sloka 281',
		ayat: "Jika ada orang yang miskin harta dan ia juga suka melakukan tindakan kejam dan jahat, orang seperti ini sesungguhnya telah mati dalam hidupnya."
	},
	{
		sloka: 'Sloka 282',
		ayat: "Orang yang miskin jiwanya (berkepribadian buruk), biarpun ia pandai tidak akan ada yang mengindahkan, walaupun ia berkata benar dan penuh manfaat tidak akan ada yang perduli; apalagi jika si miskin jiwa itu orang bodoh, tentunya tidak akan ada orang yang senang dengannya."
	},
	{
		sloka: 'Sloka 283',
		ayat: "Jika miskin harta, walaupun pintar dan baik hati, sungguh sulit untuk dikenal orang. Jika kaya harta, kebajikan yang dilakukan menjadi sempurna. Inilah alasan kenapa harta itu harus dicari dengan sekuat tenaga."
	},
	{
		sloka: 'Sloka 284',
		ayat: "Orang yang miskin harta demikian juga orang yang cendala sama-sama tidak bisa melaksanakan sedekah. Orang cendala sedekahnya tidak diterima sedangkan orang miskin tidak ada kemungkinan untuk bersedekah karena tidak ada yang bisa disedekahkan."
	},
	{
		sloka: 'Sloka 285',
		ayat: "Demikianlah orang miskin harta dan miskin jiwa, rumahnya bagaikan neraka saja keadaannya, sandang, pangan dan papan sulit diperoleh. Inilah alasan kenapa harta dan kebajikan itu sangat penting keberadaannya."
	},
	{
		sloka: 'Sloka 286',
		ayat: "Meskipun si miskin gemuk, tetap tidak ada yang dapat disedekahkan kepada orang-orang yang berkunjung ke rumahnya, inilah alasan lain kenapa harta itu penting untuk dimiliki."
	},
	{
		sloka: 'Sloka 287',
		ayat: "Mereka yang miskin hanya makan jika ada bantuan dari sahabatnya dan sahabatnya itu memenuhi segala keperluan dari si miskin; tapi si miskin tidak mampu membalas kebaikan budi sahabatnya dikarenakan oleh kemiskinannya itu. Orang miskin yang berhati keji, rakus, berbudi pekerti tamak, dan kikir; sesungguhnya telah mati dalam hidupnya."
	},
	{
		sloka: 'Sloka 288',
		ayat: "Mereka yang miskin dari masa kecilnya berkeadaan lebih baik dari orang kaya yang kemudian menjadi miskin, penderitaan teramat berat akan dirasakan oleh orang yang dulunya kaya lalu jatuh miskin; sedangkan mereka yang miskin dari kecil telah terbiasa dengan keadaannya itu."
	},
	{
		sloka: 'Sloka 289',
		ayat: "Biasanya orang kaya saat makannya menyisakan banyak dari makanan yang dimakan lalu dibuang sia-sia, sedangkan si miskin akan makan apapun yang tersedia dan tanpa sisa."
	},
	{
		sloka: 'Sloka 290',
		ayat: "Mereka yang miskin dapat makan enak karena laparnya, sedangkan orang kaya sulit menikmati makanannya karena tidak pernah merasakan lapar."
	},
	{
		sloka: 'Sloka 291',
		ayat: "Kelaparan dapat menutupi kebajikan dan kebenaran, ia juga dapat melenyapkan keteguhan hati, dan lidah selalu 'ingat' dengan rasa yang enak inilah yang menyebabkan lapar."
	},
	{
		sloka: 'Sloka 292',
		ayat: "Mereka yang bodoh akan selalu menyesali perbuatan buruknya di waktu lampau apabila mengalami kesengsaraan saat ini, mereka hanya menyesali saja tanpa pernah berusaha untuk menanam kebajikan di kehidupannya kali ini."
	},
	{
		sloka: 'Sloka 293',
		ayat: "Apa sebab orang tidak berhasil dalam pencarian harta dan perolehan kesenangan meskipun telah diusahakan dengan giat; sebab kegagalan usaha dikarenakan dulu ia tidak pernah 'menanam' kebajikan dan kebenaran, lalu apa yang dapat dipetiknya sekarang? Walaupun kali ini gagal, sekaranglah kesempatan baik untuk menanam kebajikan dan kebenaran dan pasti akan berbuah kelak dan kita dapat memanennya."
	},
	{
		sloka: 'Sloka 294',
		ayat: "Mereka yang sangat cerdas namun miskin, selalu gagal dalam usahanya dikarenakan oleh kemiskinannya; sebaiknya sumbangkan kecerdasan itu tanpa mengharapkan imbalan apapun, niscaya setelah menabur benih kebajikan dan kebenaran melalui kecerdasannya, lambat laun akan diperoleh juga 'buah' dari kebajikan dan kebenaran itu."
	},
	{
		sloka: 'Sloka 295',
		ayat: "Mereka yang tidak memperoleh kesenangan hingga hari tuanya, seolah-olah hidupnya selalu dipenuhi oleh kemelaratan dan kesengsaraan, jangan pernah putus asa dalam pelaksanaan kebajikan dan kebenaran, kelak pastilah memperoleh kesenangan di surga dan kemuliaan di kehidupan berikutnya."
	},
	{
		sloka: 'Sloka 296',
		ayat: "Sebuah pohon kayu yang tumbuhnya condong dan beranting bengkok-bengkok dan tidak subur, lagi pula dimakan rayap, dan menjadi sarang semut batang pohonnya. Kulitnya tergores dan hangus terbakar oleh api kebakaran hutan, tumbuhnya di atas batu dan batangnya tanpa getah lagi karena ia tumbuh di tanah yang gersang, keadaannya sungguh sangat merana. Namun masih lebih merana keadaan orang miskin yang selalu berhara-harap akan sesuatu yang tidak bisa diperolehnya karena miskin, apalagi jika sampai diperbudak oleh harapan-harapannya lalu berbuat jahat."
	},
	{
		sloka: 'Sloka 297',
		ayat: "Mereka yang diperbudak oleh harapan-harapan akan pemberian, akan dipermainkan oleh orang yang diharapkan memberi, disuruh kesana-kemari, jalan, berdiri, duduk, berkata-kata, diam dan lain-lain. Meskipun begitu mereka yang berharap tetap patuh karena besarnya harapan akan pemberian."
	},
	{
		sloka: 'Sloka 298',
		ayat: "Tuhan menciptakan berbagai makhluk dengan bentuk, sifat dan keistimewaannya masing-masing, namun satu yang tidak pernah diciptakan oleh Tuhan bahkan hingga hari ini, yakni manusia yang tidak membenci orang yang datang menghamba dengan harapan akan sesuatu secara berlebih-lebihan."
	},
	{
		sloka: 'Sloka 299',
		ayat: "Pengemis yang sangat berharap akan perolehan sesuatu, keadaannya tiada beda dengan orang yang hampir mati, nafasnya tersumbat di kerongkongan, terputus-putus dalam berkata-kata, keringatnya mengucur, gerakannya resah, mukanya pucat; demikianlah keadaan pengemis yang sangat berharap akan sedekah, terlihat persis seperti orang yang hampir mati."
	}];
  $scope.bab24 = [
	{
		sloka: 'Sloka 300',
		ayat: "Pergaulan dengan cepat dapat menularkan hal-hal yang baik apabila bergaul dengan orang-orang utama; seperti bau bunga (parfum) yang dapat beralih kepada kain, air, minyak dan tanah apabila bersentuhan dengan bunga (parfum) itu."
	},
	{
		sloka: 'Sloka 301',
		ayat: "Oleh karenanya, bisa-bisa merosot budi seseorang jika ia bergaul dengan orang yang hina budi (jahat). Jika mereka bergaul dengan yang madya budi (sedang-sedang) madyalah yang ditularkan. Jika ia bergaul dengan orang yang utama budi, maka utama budilah yang akan diperolehnya."
	},
	{
		sloka: 'Sloka 302',
		ayat: "Mesikipun sedikit kepandaian/kebijaksanaan seseorang, apabila bertempat tinggal dengan orang yang pandai/bijaksana dan selalu bertanya ilmu pengetahuan dengannya, maka akan semakin bertambah pandai/bijaksanalah hasilnya, bagaikan zat warna yang jatuh pada air, akan menyebar dan akhirnya mewarnai air itu."
	},
	{
		sloka: 'Sloka 303',
		ayat: "Mesikipun sedikit kepandaian/kebijaksanaan seseorang, apabila bertempat tinggal dengan orang yang pandai/bijaksana dan selalu bertanya ilmu pengetahuan dengannya, maka akan semakin bertambah pandai/bijaksanalah hasilnya, bagaikan zat warna yang jatuh pada air, akan menyebar dan akhirnya mewarnai air itu."
	},
	{
		sloka: 'Sloka 304',
		ayat: "Apapun alasannya janganlah membenci ilmu pengetahuan, tuntut dan kejarlah ilmu itu, pengetahuan akan membuka wawasan dan menjauhkan kita dari dosa-dosa; sebab orang yang bodoh tidak akan pernah sadar, bahwa yang terlebih dahulu harus diperangi dan ditundukkan adalah sisi pribadi yang bodoh dan jahat."
	}];
  $scope.bab25 = [
	{
		sloka: 'Sloka 305',
		ayat: "Jika berteman, hendaknya orang yang berbudi luhur saja yang menjadi teman anda. Jika hendak mencari saudara, hendaknya orang yang berbudi luhur saja menjadi saudara anda. Andai berdebat dan berbantahan sekalipun, hendaknya orang yang berbudi luhur saja yang menjadi lawan anda. Apalagi jika anda mencari sahabat, orang yang berbudi luhur saja hendaknya menjadi sahabat anda, sebab mustahil anda tidak akan kelimpahan budi luhur itu jika selalu berinteraksi dengan orang-orang yang berbudi luhur."
	},
	{
		sloka: 'Sloka 306',
		ayat: "Adapun orang yang berbudi utama, mereka tidak gembira jika dipuji, tidak sedih jika dicela/dihina, tidak gusar dan pemarah, tidak mengucapkan kata-kata kasar; sebaliknya tetap teguh dalam kebenaran, berhati bersih, dan berpikiran suci."
	},
	{
		sloka: 'Sloka 307',
		ayat: "Mereka yang utama budi tidak memikirkan cacat dan dosa orang lain, pun tidak akan mengeluarkan kata-kata kasar dalam menanggapi celaan dan hinaan orang. Dalam hatinya yang dilihat hanyalah kebajikan dan perbuatan baik orang dan selalu berpikiran positif. Tidak ada kemungkinan apapun yang dapat membuatnya menyimpang dari kebajikan dan kebijaksanaan, ia selalu berkeadaan teguh pada susila, etika, dan sopan santun. Orang bajik dan bijaksana disebut juga sebagai manusia utama."
	},
	{
		sloka: 'Sloka 308',
		ayat: "Demikianlah disimpulkan, orang yang bajik, penuh pengetahuan, dan bijaksana, dapat dilihat dari kesabaran dan kerendahhatiannya; bagaikan keadaan padi yang merunduk lantaran berat buahnya, pun pohon yang dilebati buah merunduk lantaran menopang berat buah-buahnya."
	},
	{
		sloka: 'Sloka 309',
		ayat: "Orang bijaksana tidak akan menceritakan keburukan orang lain apalagi di belakang orang tersebut, selalu berusaha untuk menolong orang-orang yang kesusahan, tidak diliputi kemarahan dan kebencian. Sangat pantaslah orang bijaksana untuk dihormati."
	},
	{
		sloka: 'Sloka 310',
		ayat: "Manusia suci adalah mereka yang dipenuhi kebijaksanaan, terpelajar dan berpengetahuan, tidak sombong, berbudi lembut, tidak berangasan dan tidak diliputi amarah, ia dihormati dan dituruti perintahnya."
	},
	{
		sloka: 'Sloka 311',
		ayat: "Meskipun hanya setengah dari seluruh kebajikan orang suci dapat dituruti, niscaya dapat menolong anda dari kesusahan dan neraka."
	},
	{
		sloka: 'Sloka 312',
		ayat: "Tidak hanya manusia hidup yang menyayangi orang-orang suci, bahkan roh pun menyayanginya. Mereka yang meniru dan menuruti bimbingan orang-orang suci adalah orang yang sesungguhnya menyayangi dirinya sendiri."
	},
	{
		sloka: 'Sloka 313',
		ayat: "Jika ada orang yang berbuat bajik bukan karena hasrat akan pahala namun lebih dipandang sebagai kewajiban diri. Perilaku bajik yang jauh dari motif-motif pahala seperti ini merupakan tindakan cerdas, terpelajar dan bijaksana. Jangan pernah memandang dan menghitung pahala dari kebajikan yang dilakukan."
	},
	{
		sloka: 'Sloka 314',
		ayat: "Tirulah perbuatan orang bajik dengan tekun dan teguh. Harta kekayaan tidak selayaknya dipegang teguh jika bertentangan dengan kebajikan, sebab ia dapat datang atau pergi dan sulit untuk dijaga; lagi pula bukannya orang yang tidak berharta dinamakan miskin. Walau tanpa harta, jika kaya moralitas, bajik dan susila, inilah sesungguhnya yang dinamakan kaya, meskipun ada orang yang kaya harta namun jahat, amoral dan asusila, mereka inilah yang disebut miskin."
	},
	{
		sloka: 'Sloka 315',
		ayat: "Oleh karena itu timbang dan pikirkanlah perbuatan-perbuatan yang telah dilakukan sehari-hari. 'Salah atau benarkah perbuatan itu'? 'Sama dengan hewankah atau dengan orang bajik tingkah lakuku'? Demikianlah hendaknya pertimbangan kita dari hari ke hari dan senantiasalah menasehati diri sendiri."
	},
	{
		sloka: 'Sloka 316',
		ayat: "Mereka yang akan menerima pahala dari perbuatan itu adalah mereka yang berbuat, yang menyuruh berbuat, serta mereka yang membenarkan perbuatan itu. Ketiganya sama-sama akan memperoleh pahala dari perbuatan itu, apapun macamnya, apakah buruk ataukah baik."
	},
	{
		sloka: 'Sloka 317',
		ayat: "Oleh karenanya perbuatan baiklah yang harus dilakukan dan terus diusahakan. Meskipun orang berbuat jahat kepada kita, hendaklah dibalas dengan perbuatan bajik. Kejahatan jangan dibalas dengan kejahatan, sebab kita akan terjebak dalam kejahatan dan menjadi sama saja dengan mereka yang jahat. Siapa yang berbuat akan memperoleh karmanya."
	},
	{
		sloka: 'Sloka 318',
		ayat: "Bagaikan bongkahan-bongkahan batu besar yang dinaikkan ke gunung dengan sangat sulitnya, namun ketika diturunkan dapat dilakukan dengan cara yang sangat mudah. Demikianlah kelahiran menjadi manusia ditingkatkan dengan cara yang teramat sulit, namun dapat diturunkan dengan sangat mudahnya. Maka dari itu berusahalah dengan tekun untuk meningkatkan kebajikan dalam diri, niscaya kualitas penjelmaan dapat terus ditingkatkan."
	},
	{
		sloka: 'Sloka 319',
		ayat: "Perbuatan bajik/baik membawa ke alam surga; di muka bumi menjadi kenangan dan pembicararaan. Oleh karenanya selalulah berbuat kebajikan, inilah hakekat dan tujuan dari penjelmaan."
	},
	{
		sloka: 'Sloka 320',
		ayat: "Perbuatan bajik yang membawa kemasyuran bagaikan seorang ibu keberadaannya, karena sama-sama diingat berkat jasa-jasanya. Sekalipun telah mati, mereka yang termasyur dengan kebajikan akan tetap dikenang dan hidup dalam hati masyarakat, sebab kebajikan itu abadi. Tapi mereka yang tanpa kebajikan akan musnah seiring waktu, pun apabila kejahatan yang dilakukannya, orang-orang akan mengingatnya sebagai manusia hina, ini berkeadaan lebih buruk dari mati."
	},
	{
		sloka: 'Sloka 321',
		ayat: "Jika ingin menjaga nama baik inilah yang hendaknya dilakukan: jangan menghianati sahabat, jangan menghianati kepercayaan yang diberikan, jangan menghianati orang yang membiayai anda, yang menghidupi anda, dan jangan menghianati orang yang memberi perlindungan kepada anda. Mereka yang berbuat nista adalah orang yang tidak berterima kasih dan membalas kebajikan-kebajikan orang dengan kejahatan."
	}];
  $scope.bab26 = [
	{
		sloka: 'Sloka 322',
		ayat: "Menghina orang suci, mabuk-mabukan, dan mencuri adalah perbuatan dosa, namun bagaimanapun juga ia masih dapat ditebus. Akan tetapi dosa yang diakibatkan oleh perbuatan tidak tahu berterima kasih akan kebajikan orang, ia tidak akan dapat ditebus dengan apapun juga."
	},
	{
		sloka: 'Sloka 323',
		ayat: "Mereka yang menjahati orang yang tidak berniat jahat terhadapnya, dengan pasti dan tanpa ampun akan masuk ke jurang neraka."
	},
	{
		sloka: 'Sloka 324',
		ayat: "Mereka yang jahat sesungguhnya tidak pernah sayang kepada dirinya sendiri, sebab membiarkan dirinya berbuat jahat, dan kemudian dirinya sendirilah yang akan mengalami siksa dari kejahatan yang diperbuatnya, tidak sayanglah orang yang menyebabkan dirinya sendiri sengsara."
	},
	{
		sloka: 'Sloka 325',
		ayat: "Orang seperti inilah yang tidak pantas untuk diajak bergaul dan dijadikan kawan: 1) mereka yang selalu berusaha untuk menyakiti orang lain: 2) mereka yang suka membuat orang lain bersedih hati; 3) mereka yang tidak memiliki kesopanan, etika dan susila; 4) mereka yang tidak suka menepati janjinya; 5) mereka yang suka berkata bohong dan dusta; 6) mereka yang suka mabuk-mabukan. Keenam tipe orang inilah yang hendaknya dijauhi saja."
	},
	{
		sloka: 'Sloka 326',
		ayat: "Jika bergaul dengan orang yang jahat, niscaya dan tidak mungkin dihindari akan menular juga noda kejahatan mereka itu. Bagaikan pohon kayu yang subur, ia akan ikut terbakar juga jika bercampur dengan kayu-kayuan kering, oleh karenanya jangan berkawan dan bersahabat dengan orang yang jahat perbuatannya."
	},
	{
		sloka: 'Sloka 327',
		ayat: "Sebaiknya hindari saja untuk bersahabat atau bermusuhan dengan orang jahat. Jangan suka dijilati anjing, apalagi bila sampai digigitnya."
	},
	{
		sloka: 'Sloka 328',
		ayat: "Mereka yang jahat tiada bedanya dengan duri, agar tidak tertusuk duri pakailah terompah, atau hindari duri tersebut. Dengan orang jahat usahakan agar mereka tunduk meskipun dengan cara yang keras (hukuman), atau jauhi saja mereka. Inilah dua macam cara untuk menghindari duri dan orang jahat."
	},
	{
		sloka: 'Sloka 329',
		ayat: "Waspadalah selalu kepada orang jahat, meskipun seolah-olah mereka terlihat tunduk dan menurut; bagaikan ular, meskipun telah lama dilatih tidak urung sekali waktu ia akan memagut juga."
	},
	{
		sloka: 'Sloka 330',
		ayat: "Dan juga mereka yang berbudi rendah, menjadi semakin sombong saja tingkah lakunya jika melihat orang yang berbudi luhur lantaran kesusilaan, etika dan norma terlihat mengalah padanya. Tidak mempunyai malu si durjana itu dengan angkuhnya menatap sang sujana ketika berpapasan, dan ia berpikir bahwa sang sujana telah tunduk padanya, bagaikan keadaan gajah tunggangan yang merunduk ketika melihat tuannya."
	},
	{
		sloka: 'Sloka 331',
		ayat: "Hendaknya orang berbudi utama, jangalah mudah percaya kepada orang jahat, walaupun si jahat terlihat tunduk dengan menundukkan wajah dan sujud menyatakan hormat. Sebab mereka yang dilekati kejahatan dapat melakukan segala cara untuk meraih tujuannya. Apabila timba itu jatuh telungkup di sumur, niscaya ia hendak mengambil airnya."
	},
	{
		sloka: 'Sloka 332',
		ayat: "Jangan bergembira dulu jika tidak diganggu oleh si durjana kawan anda, sebab banyak orang merasa beruntung tidak digigit ular, walaupun tubuhnya nyata-nyata telah kena belitan."
	},
	{
		sloka: 'Sloka 333',
		ayat: "Biarpun manis dan lemah lembut tutur kata si durjana, tidak ada salahnya untuk waspada saja; sebab bunga yang bermekaran tidak pada musimnya, adalah sebuah pertanda bencana."
	},
	{
		sloka: 'Sloka 334',
		ayat: "Tidak akan dijumpai kewelas-asihan pada tindakan yang kejam, demikian juga tidak akan dijumpai kekejaman pada tindakan welas asih. Demikian kebajikan tidak akan dijumpai pada kejahatan, demikian juga pada kejahatan tidak akan dijumpai adanya kebajikan."
	},
	{
		sloka: 'Sloka 335',
		ayat: "Inilah keadaan dari pucuk tunas pohon intaran, rasanya tetap akan pahit walaupun berkali-kali pohonnya telah ditebang. Meskipun orang telah berkali-kali mencucinya, atau bahkan melumurinya dengan madu, rasanya tetap akan pahit. Walaupun diluluri dengan bumbu-bumbuan, rasanya tetap akan pahit. Demikianlah keadaan dari manusia durjana, tidak dapat dirubah menjadi bajik walaupun telah dihukum dengan keras, pun juga tidak dapat diperbaiki perilakunya dengan cara disanjung-sanjung."
	},
	{
		sloka: 'Sloka 336',
		ayat: "Bagi orang yang berbudi, pengetahuan itu gunanya untuk menghilangkan keangkuhan, namun bagi mereka yang tidak berbudi, pengetahuan itu justru semakin membangkitkan keangkuhannya. Bagaikan sinar matahari bertujuan untuk menghilangkan kegelapan, namun bagi mereka yang sedang sakit mata dan rabun (pada burung hantu), sinar matahari justru membuat pengelihatannya semakin kabur karena silaunya."
	},
	{
		sloka: 'Sloka 337',
		ayat: "Inilah yang menyebabkan munculnya kesombongan bagi si papa budi, diantaranya: widyamada, dhanamada, dan abhijanamada. Widyamada adalah mabuk/angkuh karena merasa diri berpengetahuan; dhanamada mabuk/angkuh karena merasa diri kaya; abhijanamada mabuk/angkuh karena merasa diri bangsawan."
	},
	{
		sloka: 'Sloka 338',
		ayat: "Adalah lebih baik besi keadaannya dibanding orang sombong dan angkuh, sebab besi itu dapat dibengkokan, dapat disambung, dapat dicairkan dengan cara dipanaskan; sedangkan mereka yang sombong dan angkuh tetap teguh dengan kesombongan dan keangkuhannya."
	},
	{
		sloka: 'Sloka 339',
		ayat: "Mereka yang durjana akan sangat pandai menyembunyikan maksud jahatnya, bagaikan keberadaan api dalam sekam, apinya tidak tampak namun dengan tiba-tiba menghanguskan apapun yang tersedia."
	},
	{
		sloka: 'Sloka 340',
		ayat: "Bahkan karena kehebatan politiknya, banyak orang-orang berbudi pekerti baik menjadi jatuh dalam cengkraman si durjana."
	},
	{
		sloka: 'Sloka 341',
		ayat: "Mereka yang durjana, sombong, dan angkuh, dapat melihat dosa kecil orang lain dengan sangat jelasnya, anehnya mereka tidak dapat melihat dosanya sendiri walaupun sebesar gunung."
	},
	{
		sloka: 'Sloka 342',
		ayat: "Mereka yang berbudi baik akan sangat senang hatinya dapat menghormati orang-orang bajik, sedangkan manusia durjana, sombong dan angkuh, menjadi sangat bangga hatinya apabila dapat menistakan, mengejek, dan berlaku kurang ajar kepada orang yang berbudi baik dan berlaku bajik."
	},
	{
		sloka: 'Sloka 343',
		ayat: "Orang kaya yang kikir, orang miskin yang angkuh, orang bodoh yang benci ilmu; inilah kriteria orang bodoh."
	},
	{
		sloka: 'Sloka 344',
		ayat: "Orang yang dengan keras menghukum mereka yang berbuat salah, sedangkan ia sendiri dengan sengaja melakukan juga kesalahan itu, ada juga orang yang marah-marah terhadap mereka yang tidak pantas untuk dimarahi; kedua orang ini disebut tolol."
	},
	{
		sloka: 'Sloka 345',
		ayat: "Orang kasar dan tidak menyukai perkataan lemah lembut, disebabkan oleh tingkah lakunya yang kesasar. Ia lupa bahwa untuk membuktikan kemurnian emas adakalanya emas tersebut harus digosokkan terlebih dahulu. Orang yang berhati halus, walaupun dikasari tetap akan menunjukkan kelembutannya."
	},
	{
		sloka: 'Sloka 346',
		ayat: "Apabila seseorang yang utama budi dikarenakan oleh sesuatu berinteraksi dengan si hina budi, seketika si hina budi akan merasa dirinya orang besar, walaupun orang-orang telah mencapnya sebagai manusia hina budi. Mestinya si hina budi segera meniru perilaku si utama budi agar ia bisa menjadi besar."
	},
	{
		sloka: 'Sloka 347',
		ayat: "Adapun orang yang suci hati, biarpun ia dikasari dan dipuji, namun yang bermanfaat saja akan dipilihnya; seperti keadaan angsa, walapun mencari makanan di lumpur, tidak akan ikut lumpur itu dimakannya."
	},
	{
		sloka: 'Sloka 348',
		ayat: "Orang yang utama budi walaupun diupahi berlimpah harta untuk berbuat jahat, ia akan tetap menolaknya; akan tetapi mereka yang hina budi/jahat, walaupun diupahi agar tidak berbuat jahat, ia akan tetap melakukan kejahatan."
	},
	{
		sloka: 'Sloka 349',
		ayat: "Walaupun sempurna ilmu pengetahuan seseorang, jika ia hina budi, tiada gunanya semua itu; kiab suci yang semestinya mengarahkan manusia menuju kebajikan menjadi tanpa guna, bahkan si papa budi dengan pengetahuannya akan menjadi racun bagi yang lainnya. Demikian juga orang kaya namun kikir serta orang yang berkuasa namun tidak melindungi orang yang pantas."
	},
	{
		sloka: 'Sloka 350',
		ayat: "Singkatnya, ilmu pengetahuan jika dikuasai oleh orang yang hina budi/jahat, sia-sialah keutamaannya; bagaikan hilangnya kesucian air jika ditempatkan pada tengkorak, pun hilangnya kejernihan air jika ditempatkan pada bejana yang penuh debu dan kotoran, sia-sialah semuanya itu."
	},
	{
		sloka: 'Sloka 351',
		ayat: "Jika ilmu pengetahuan utama dipelajari oleh orang yang hina budi/jahat, ilmu itu tidak akan pernah sempurna, sebab dapat dipastikan tidak didasari oleh perilaku yang utama; bagaikan ekor serigala tidak akan mampu dengan sempurna mengusir lalat yang mengerubungi sekujur tubuhnya."
	}];
  $scope.bab27 = [
	{
		sloka: 'Sloka 352',
		ayat: "Segala sesuatu yang kita alami di dunia ini, baik ataukah buruk keadaannya, semua terangkai dan muncul dari perbuatan masa lalu."
	},
	{
		sloka: 'Sloka 353',
		ayat: "Mau tidak mau, segala perbuatan masa lalu itu pasti akan dinikmati oleh yang berbuat. Baik ataukah buruk yang kita lakukan di waktu lalu, karmanya tidak akan pernah kesasar dalam mencari si pelaku. Keadaannya bagaikan si anak lembu yang tidak akan pernah kesasar dalam mengenali induknya, walau dalam kawanan yang berjumlah ribuan sekalipun."
	},
	{
		sloka: 'Sloka 354',
		ayat: "Karma itu tidak akan pernah bisa ditolak, ia akan datang apabila sudah waktunya untuk berbuah/diterima, ia tidak bisa dijauhkan, pun juga tidak dapat dipercepat. Bagaikan mekarnya bunga hanya pada musimnya, tidak bisa dihindari apabila sudah waktunya untuk mekar."
	},
	{
		sloka: 'Sloka 355',
		ayat: "Segala sesuatu yang terjadi dalam hidup ini, terangkai erat pada perbuatan masa lalu. Bajik ataukah jahat perbuatan masa lalu itu, karmanya pasti akan diperoleh secara adil, tidak ditambahi pun tidak dikurangi."
	},
	{
		sloka: 'Sloka 356',
		ayat: "Ada orang yang telah berusaha giat, penuh pertimbangan, bijaksana, suka membantu dan menyenangkan orang lain, berjiwa pahlawan, telah menaklukkan hawa nafsu, dan berwajah rupawan; namun ternyata dalam hidupnya ia menjadi budak dari orang yang berjiwa rendah, semua itu adalah buah dari karma masa lalunya."
	},
	{
		sloka: 'Sloka 357',
		ayat: "Sungguh berbeda pahala karma dari masing-masing orang, perhatikanlah! Ada orang yang memikul usungan dan ada yang dipikul oleh usungan."
	},
	{
		sloka: 'Sloka 358',
		ayat: "Pada hakekatnya semua makhluk berharap memperoleh kebahagiaan dalam hidupnya, namun karena semua terangkai dari karma masa lalu, tidak semuanya akan dapat meraih harapan dan cita-cita hidupnya."
	},
	{
		sloka: 'Sloka 359',
		ayat: "Ada orang yang rendah hati dan ada orang yang tinggi hati; ada yang bahagia ada juga yang bersedih; ada yang kaya dan ada yang miskin; semuanya dapat datang dan pergi serta berkeadaan tidak tetap, karma itulah penyebabnya."
	},
	{
		sloka: 'Sloka 360',
		ayat: "Mereka yang mengambil hak-hak orang lain di waktu lalu akan menjadi miskin di kemudian hari; mereka yang menjahati orang di waktu lalu akan dijahati di kemudian hari; apapun yang diperbuat diwaktu lalu akan diterima di kemudian hari."
	},
	{
		sloka: 'Sloka 361',
		ayat: "Apapun yang ditabur dan dibiakkan di waktu lalu, di kemudian hari akan dipanen sesuai bibitnya, demikian juga karma apapun yang ditabur, maka karma seperti itulah yang akan dihasilkannya."
	},
	{
		sloka: 'Sloka 362',
		ayat: "Di alam moksa kebahagaiaan tertinggi dirasakan oleh roh penghuninya; di alam surga roh memperoleh pahala berupa kesenangan; di dunia makhluk-makhluk memperoleh suka dan duka, sedangkan di alam neraka roh hanya memperoleh penderitaan saja."
	},
	{
		sloka: 'Sloka 363',
		ayat: "Ada beberapa perbuatan baik yang dipastikan akan mengantar manusia kelak memasuki alam surga, diantaranya dengan tulus menyumbangkan sarana dan prasarana yang mendukung ketersediaan: 1) pangan, 2) kemasyarakatan, 3) sistem transportasi, 4) pengairan dan irigasi, 5) kepemerintahan dan kepemimpinan yang adil."
	},
	{
		sloka: 'Sloka 364',
		ayat: "Janganlah bermalas-malasan; pekerjaan esok hari yang bisa dikerjakan sekarang sebaiknya dikerjakan saja, sebab maut tidak pernah pandang bulu dan tidak pernah perduli, apakah pekerjaan (kebajikan) anda sudah selesai atau belum."
	}];
  $scope.bab28 = [
	{
		sloka: 'Sloka 365',
		ayat: "Jika ada seseorang dapat terbebas dari kematian dan dapat hidup abadi, ia boleh bermalas-malasan; sedangkan bagi mereka yang pasti akan mati dan tidak bisa hidup abadi apa gunanya bermalas-malasan."
	},
	{
		sloka: 'Sloka 366',
		ayat: "Waktu itu tiada batasnya, ia terus bergerak meski telah melewati ribuan putaran tahun; sedangkan hidup itu ada batasnya, bahkan seringkali dijalani dengan sangat cepat dan hanya dalam sekejap saja; sadar akan hal tersebut, apakah yang menyebabkan orang masih menyia-nyiakan waktu, mari manfaatkan waktu sebaik-baiknya untuk berbuat kebajikan."
	},
	{
		sloka: 'Sloka 367',
		ayat: "Sesungguhnya umur sekalian makhluk hidup itu teramat pendeknya, bahkan sebagian dari umurnya itu pada waktu malam dipakainya untuk tidur akibat kantuk; yang lain dilalui dengan penyakit, kesedihan, umur tua dan masalah-masalah hidup lainnya, akhirnya sangat sedikitlah masa hidup itu sesungguhnya."
	},
	{
		sloka: 'Sloka 368',
		ayat: "Semua makhluk terperangkap dalam siklus hidup dan mati, masa hidup mereka lewati dengan penyakit, usia tua, dan kesedihan; namun umumnya tidak banyak orang yang sadar akan singkatnya masa hidup itu."
	},
	{
		sloka: 'Sloka 369',
		ayat: "Bukan karena obat, bukan karena doa, bukan karena kurban, dan juga bukan karena pengulangan-pengulangan mantra mampu membebaskan orang dari kematian; sesungguhnya tidak ada orang yang dapat terbebas dari kematian."
	},
	{
		sloka: 'Sloka 370',
		ayat: "Jika tidak ada instrospeksi diri setelah melihat orang tua renta, orang sakit, dan orang mati, di mana seolah-olah ia tidak akan berkeadaan seperti itu kelak; orang yang seperti ini tidak ubahnya dengan pecahan periuk atau batu bata."
	},
	{
		sloka: 'Sloka 371',
		ayat: "Walaupun lantaran saktinya seseorang dapat menguasai empat benua hanya dalam sekejap, namun ia tidak akan dapat menghindarkan dirinya dari penyakit, usia tua dan kematian."
	},
	{
		sloka: 'Sloka 372',
		ayat: "Waktu adalah tubuh dari sang maut kematian, detik, menit, jam, siang, malam dan pembagian waktu lainnya adalah organ-organ tubuhnya; wujudnya adalah penyakit dan usia tua, inilah penampakkan dari kematian. Bagaikan ular menelan mangsanya, demikianlah kematian pasti akan menelan makhluk hidup jika sudah waktunya."
	},
	{
		sloka: 'Sloka 373',
		ayat: "Oleh karena itu, manfaatkanlah dengan sebaik-baiknya saat hidup ini untuk melaksanakan kebajikan dan kebenaran, sebab di usia tua demikian banyaknya hambatan (kelemahan fisik & penyakit) untuk melakukan kebajikan dan kebenaran dengan sempurna. Seperti keadaan orang tua renta yang masih bernafsu untuk berkelahi, lantaran kelemahan fisiknya ia akan jatuh bangun melakukannya; bagaikan serigala tua yang telah ompong ingin mengunyah tulang, sia-sialah usahanya itu dan ia hanya dapat menjilatinya saja."
	},
	{
		sloka: 'Sloka 374',
		ayat: "Kenapa orang selalu lupa bahwa ia akan mati pada akhirnya, bagaikan orang terhukum mati, hari-hari berlalu, semua akan membawanya semakin dekat dengan masa eksekusi; demikianlah keadaan makhluk hidup, saban hari waktu hidupnya semakin berkurang."
	},
	{
		sloka: 'Sloka 375',
		ayat: "Kematian tidak dapat ditolak dan waktunya pun tidak dapat diramalkan, oleh karenanya sangat kelirulah orang yang selalu mengulur-ngulur waktu untuk melakukan kebajikan dan kebenaran; kelirulah orang yang berpikir bahwa kebajikan yang seharusnya dilakukan hari ini akan dilakukannya esok hari."
	},
	{
		sloka: 'Sloka 376',
		ayat: "Sebab tidak ada yang dapat memutus hidup selain dari pada kematian, maka dari pada itu lakukanlah seolah dengan tergesa-gesa kebajikan dan kebenaran itu; bagaikan keadaan buah-buahan akhirnya ia akan jatuh juga ke tanah, demikianlah yang hidup pasti akan mati cepat atau lambat, maka percepatlah untuk melakukan hal-hal yang bajik dan benar dalam hidup ini."
	},
	{
		sloka: 'Sloka 377',
		ayat: "Kematian sudah ditetapkan waktunya oleh takdir Tuhan, walaupun terluka parah ia tidak akan mati jika belum takdirnya, sebaliknya jika sudah takdir, seseorang bisa mati walaupun hanya tertancap duri."
	},
	{
		sloka: 'Sloka 378',
		ayat: "Kesimpulannya, sekalian makhluk hidup diombang-ambingkan oleh kesengsaraan dan kematian; menyadari kenyataan ini, kenapa manusia masih saja melakukan kesenangan-kesenangan egoistiknya dengan menyengsarakan makhluk hidup lainnya."
	},
	{
		sloka: 'Sloka 379',
		ayat: "Sebab kematian itu senantiasa akan mengintai hidup kita, tidak perduli sedang duduk, tidur, berjalan, sedang makan dan lain-lain. Menyadari kondisi ini kenapa kita masih enak-enakan tidur dalam kemalasan, bagaikan ikan dalam tempayan, hidupnya hanya menunggu mati."
	},
	{
		sloka: 'Sloka 380',
		ayat: "Bagaimanapun 'pahit' dan sulitnya hidup, mau tidak mau kita harus menjalaninya juga. Segala sesuatu yang merupakan karma haruslah dinikmati, hidup miskin kekurangan pangan, tuna wisma, tanpa pertolongan, bantuan dan lain-lain, semua itu harus dijalani juga. Jika ingin merubah karma, lakukanlah kebajikan dan kebenaran mulai hari ini; sebab kelak ialah yang akan menemani hidup, sebagai kawan yang akan memberikan pertolongan setiap saat."
	},
	{
		sloka: 'Sloka 381',
		ayat: "Saat ajal tiba, isakan tangis sanak saudara dan kawan mengiringi; selanjutnya tiada siapapun yang menemani, bahkan pasangan hidup kitapun akan beranjak pergi dari kuburan, tiba saatnya kita berjalan sendiri saja dan hanya ditemani oleh karma bajik dan buruk saat hidup."
	},
	{
		sloka: 'Sloka 382',
		ayat: "Masa anak-anak hilang oleh masa remaja, keremajaan hilang oleh kedewasaan, kedewasaan itu hilang oleh masa tua, dan semuanya hilang ditelan kematian. Menyadari ini, mulai sekarang bergiatlah untuk mulai menabung kebajikan dan kebenaran, sebab ialah yang merupakan harta di akherat."
	},
	{
		sloka: 'Sloka 383',
		ayat: "Kekayaan-kekayaan duniawi tidak akan dapat dipergunakan untuk menghindar dari penyakit, usia tua, dan kematian."
	},
	{
		sloka: 'Sloka 384',
		ayat: "Tidak kekallah keremajaan, kecantikan, pun juga hidup ini; apalagi kepemilikan harta kekayaan, misalnya uang, emas, perak, pakaiaan dan lain-lain, inilah yang harus diperhatikan oleh mereka yang bijaksana dan bebaskanlah diri dari ikatan-ikatan itu."
	},
	{
		sloka: 'Sloka 385',
		ayat: "Janganlah takabur akan usia muda yang sehat, jangan sombong atas berlimpahnya kekayaan yang dimiliki; hendaknya selalu waspada akan penyakit sosial dan kemiskinan moral, seperti kewaspadaan kita pada api, racun dan musuh."
	},
	{
		sloka: 'Sloka 386',
		ayat: "Hendaknya inilah yang diwaspadai oleh para arif bijaksana: wanita jalang, lelaki hidung belang, para penjilat, manusia licik, kepikunan, tawaran kenikmatan, dan pada mereka yang hanya menghafal ilmu pengetahuan (doktrin agama) tanpa berusaha memahaminya dengan benar."
	},
	{
		sloka: 'Sloka 387',
		ayat: "Kodrat manusia tidak bisa lepas dari kesedihan, penyakit, usia tua, dan kematian; mereka yang cerdas menyadari dengan baik kenyataan tersebut dan tidak akan membiarkan dirinya diperbudak oleh kenikmatan-kenikmatan sesat, dan mereka yang bijaksana akan berusaha lepas dari kenikmatan-kenikmatan duniawi yang mengikat."
	},
	{
		sloka: 'Sloka 388',
		ayat: "Hidup bergantung pada badan, badan adalah tempat hidup; hidup menyebabkan badan ada; lenyapnya badan melenyapkan hidup, lenyapnya hidup berarti musnahnya badan; pendek kata antara hidup dan badan muncul bersamaan dan musnahnya pun bersamaan juga."
	},
	{
		sloka: 'Sloka 389',
		ayat: "Karena perbuatan baik ataupun buruk dilakukan dengan perantaraan badan, maka badan itulah yang menerima akibat dari perbuatan baik ataupun buruk. Pada hakekatnya badan adalah pelaku dari perbuatan dan juga sebagai penerima akibat perbuatan tersebut."
	},
	{
		sloka: 'Sloka 390',
		ayat: "Sekalian makhluk dikuasai oleh waktu dan menderita dalam waktu, menyadari semuanya, jangan pernah sia-siakan waktu, dengan segera berbuatlah kebajikan dan kebenaran."
	}];
  $scope.bab29 = [
	{
		sloka: 'Sloka 391',
		ayat: "Adalah dua jalan, Pitrayana dan Dewayana. Jalan pertama dianjurkan untuk mereka yang hidup berumah tangga/Grehasta melalui pelaksanaan-pelaksanaan lima macam pengorbanan tulus (kehadapan Tuhan, roh leluhur, guru, manusia, alam lingkungan beserta isinya); sedangkan jalan kedua adalah jalan lepas dari ikatan nafsu duniawi dan ego."
	},
	{
		sloka: 'Sloka 392',
		ayat: "Mereka yang mengikuti jalan Pitrayana dapat mencapai Surga/kebahagiaan melalui pelaksanaan kurban, teguh pada kebenaran, ketaatan pada etika dan moral, namun karena mereka masih terikat oleh motif-motif akan hasil, pada akhirnya duka pasti menyertai kebahagiaannya; maka dari itu jalan kebebasanlah yang menjadi lebih tinggi, bebas dari harapan-harapan akan hasil dari segala aktivitasnya dan tetap berbahagia dalam situasi apapun."
	},
	{
		sloka: 'Sloka 393',
		ayat: "Setelah segala pahala baik dari perbuatan bermotif dinikmati, maka kembalilah orang tersebut mengalami duka nestapa; bagaikan keadaan seekor tupai dalam menikmati makanan yang disimpannya untuk musim dingin, setelah makanan itu habis, di awal musim panas tersiksalah ia oleh perut laparnya dan kemudian ia harus kembali giat menimbun makanan untuk musim dingin berikutnya, begitulah keadaannya berulang-ulang."
	},
	{
		sloka: 'Sloka 394',
		ayat: "Kedukaan hidup akibat terbelenggu motif-motif kerja dan perilaku, pada akhirnya selalu saja bermuara pada kesedihan, maka dari itu hindarkanlah diri dari keterikatan akan hasil dari segala kegiatan pun usaha."
	},
	{
		sloka: 'Sloka 395',
		ayat: "Akibat terbelenggu oleh harapan akan hasil dari berbagai jenis pekerjaan, manusia diombang-ambing oleh perasaan suka dan duka. Apabila harapan itu tidak sesuai dengan keinginan, dukalah yang datang pada sang diri; walaupun seandainya hasil telah sesuai dengan harapan, tetap saja akan terlihat cacat dan kurangnya, inilah bukti bahwa sesungguhnya prosentase duka dalam kehidupan lebih besar dari sukanya."
	},
	{
		sloka: 'Sloka 396',
		ayat: "Sejak dilahirkan menjadi seorang bayi pun hingga hari tua tiba, manusia tersiksa oleh berbagai macam keinginan, dari hasrat buang hajat, perut lapar, kantuknya mata, dan oleh hasrat birahi."
	},
	{
		sloka: 'Sloka 397',
		ayat: "Sebenarnya musuh ataukah sahabat dari manusia adalah dirinya sendiri; apabila ia membiarkan dirinya tenggelam dalam kubangan ego dan nafsu-nafsu indrawi lalu diperbudak olehnya, sang diri menjadi musuh baginya; demikian juga apabila manusia mampu melepaskan dirinya dari ego dan bijaksana terhadap nafsu-nafsu indrawinya, sang diri menjadi sahabat sejatinya. Maka dari itu selalulah berusaha untuk dapat terbebas dari ego dan dapat lepas dari cengkraman nafsu."
	},
	{
		sloka: 'Sloka 398',
		ayat: "Karena sesungguhnya pikiranlah yang menyebabkan kesengsaraan, pikiran itu selalu mengarahkan sang diri untuk tidak pernah merasa puas akan apapun, pikiran juga yang mengarahkan ucapan dan perilaku manusia untuk tenggelam dalam lingkaran nafsu dan kesesatan; maka dari itu hendaklah pikiran itu didamaikan, dan diarahkan menuju kesucian dan kebebasan dari ego dan nafsu-nafsu sesat."
	}];
  $scope.bab30 = [
	{
		sloka: 'Sloka 399',
		ayat: "Sesungguhnya musuh yang paling berbahaya bagi umat manusia adalah kebodohan, sebab kebodohan itu akan menyeret orang menuju perbuatan buruk dan kejahatan."
	},
	{
		sloka: 'Sloka 400',
		ayat: "Duka muncul dari kebodohan, kebodohan muncul dari ego, dan ego itu bersumber dari kebodohan; maka kebodohan itulah penyebab dari kesengsaraan."
	},
	{
		sloka: 'Sloka 401',
		ayat: "Oleh sebab itu waspadalah, lawanlah dengan sekuat tenaga kerakusan, demikian juga berantaslah pikiran egois dan keangkuhan, sebab rakus, egois dan angkuh adalah belenggu jiwa yang sangat kuat dan semu itu muncul dari kebodohan."
	},
	{
		sloka: 'Sloka 402',
		ayat: "Hendaknya lenyapkanlah kebodohan dengan ilmu pengetahuan, sebab ilmu pengetahuan akan mengantar manusia menuju kesadaran dan pemahaman mutlak akan hakekat segala sesuatu; mereka yang tercerahi akan mampu mengantar dirinya menuju kebahagiaan sejati. Sedangkan si bodoh akan tetap berada dalam lingkaran kesengsaraan."
	},
	{
		sloka: 'Sloka 403',
		ayat: "Bagaikan keberadaan orang buta yang hendak mencari jalan pulang, amat besarlah kesusahan yang dialaminya, demikianlah mereka yang bodoh, dunia ini menjadi tempat kesengsaraan belaka."
	},
	{
		sloka: 'Sloka 404',
		ayat: "Tiada disangsikan lagi, orang bodoh selalu merasakan kepedihan hati. Ia menjadi kesal bertemu dengan orang-orang yang dibencinya, ia birahi jika bertemu dengan orang-orang yang disukainya; demikianlah dikarenakan oleh kebodohan, mereka diombang-ambing oleh suasana hatinya."
	},
	{
		sloka: 'Sloka 405',
		ayat: "Seperti keberadaan seorang pandai emas yang sedang melebur emas, jika kurang cakap dan giat proses peleburan berlangsung lama; sebaliknya jika cakap dan giat, emas itu dapat dengan cepat dilebur."
	},
	{
		sloka: 'Sloka 406',
		ayat: "Demikianlah keberadaan sang jiwa dalam usaha pembersihannya agar menjadi suci dan bebas dari ego angkara, jika cerdas dan berusaha dengan giat niscaya jiwa dengan cepat dapat disucikan; sebaliknya jika bodoh dan malas, meskipun dalam beratus-ratus inkarnasi jiwa belum juga bisa disucikan."
	},
	{
		sloka: 'Sloka 407',
		ayat: "Bagaikan orang yang secara rutin membersihkan badannya, ia tidak memerlukan waktu lama untuk mandi; tidak demikian halnya dengan orang yang jarang mandi, diperlukan waktu lama dan usaha yang keras agar dapat terbebas dari kotoran. Demikianlah kemarahan, kerakusan, dan segala bentuk pencemaran indra-indra harus dibersihkan dengan giat dari badan."
	},
	{
		sloka: 'Sloka 408',
		ayat: "Cara menghilangkan kemarahan, janganlah ambil hati hinaan. Cara menghilangkan birahi sesat, jangan sampai dirasuki asmara buta. Cara menghilangkan kebodohan, tinggalkanlah kebingungan. Cara menghilangkan keserakahan/kerakusan, sadarlah terhadap kemampuan diri dan puaskan hati. Cara menghilangkan ikatan duniawi, sadarlah akan hakekat segala sesuatu yang tidak pernah abadi."
	},
	{
		sloka: 'Sloka 409',
		ayat: "Adapun harapan/khayalan akan tercapainya sesuatu dilenyapkan oleh kesadaran akan kuasa takdir. Kelekatan pada kemewahan dan kesenangan dilenyapkan oleh ketidak-terlekatan diri padanya. Belenggu cinta dan kasih sayang dapat dikendorkan oleh keyakinan akan ketidakkekalan hidup. Kesusahan dan kedukaan hati dilenyapkan oleh pengendalian indra-indra dalam yoga."
	},
	{
		sloka: 'Sloka 410',
		ayat: "Kesombongan diberantas oleh kasih sayang, nafsu dilenyapkan oleh perasaan puas dan gembira; kemalasan dihilangkan oleh usaha, kebimbangan pun keragu-raguan dihilangkan oleh kemantapan dan keyakinan pada kesejatian."
	},
	{
		sloka: 'Sloka 411',
		ayat: "Jika keangkuhan dan keakuan dapat dimusnahkan, cinta kasih masyarakat akan datang; jika nafsu birahi dapat dikendalikan dengan baik, kenikmatan sejati akan diperoleh; jika kemarahan dapat dihilangkan, lenyaplah musuh-musuh dan perasaan curiga; jika mampu lepas dari nafsu indrawi, tidak akan ada lagi kesedihan."
	},
	{
		sloka: 'Sloka 412',
		ayat: "Masing-masing indra selalu menuntut kepuasannya, orang yang bijaksana akan mengendalikan indra-indranya dengan baik, sebab jika indra tanpa kendali, ia akan menjauhkan orang dari perbuatan-perbuatan bajik dan benar."
	},
	{
		sloka: 'Sloka 413',
		ayat: "Untuk menangkis datangnya nafsu birahi sesat, hendaknya orang jangan merindukan hubungan terlarang, jangan memikirkannya, jangan menyentuhnya, jangan melihat apapun yang menyebabkan munculnya nafsu sesat itu. Jika birahi dapat dikendalikan, pastilah akan jauh dari kejahatan."
	},
	{
		sloka: 'Sloka 414',
		ayat: "Sebab munculnya birahi sesat bersumber dari kegairahan pada sesuatu yang tidak pantas, jika hasrat hati itu tidak dapat dikekang dan bertambah kuat pastilah orang akan tenggelam dalam kesesatan. Maka dari itu orang yang bijaksana tidak akan membiarkan dirinya diperbudak oleh nafsu birahi."
	},
	{
		sloka: 'Sloka 415',
		ayat: "Orang bijaksana paham betul baik-buruk segala sesuatu, ia memiliki pemahaman sempurna akan hakekat apapun; ia yang tercerahi dapat melihat dunia yang tadinya kejam menjadi ramah, yang tadinya buruk menjadi indah, yang tadinya kurang kini berlimpah."
	},
	{
		sloka: 'Sloka 416',
		ayat: "Segala yang ada dan tersedia di semesta ini adalah milik bersama sekalian makhluk, hanya orang-orang serakahlah yang beranggapan bahwa ia adalah pemiliknya, lalu mereka terjebak dan diperbudak oleh kebencian dan kelobaan hati; sedangkan bagi orang bijaksana hanya kepuasan hati itulah yang dijadikannya harta pribadi."
	},
	{
		sloka: 'Sloka 417',
		ayat: "Bagi orang bijaksana kelekatan pada objek-objek indra itulah yang justru ditinggalkannya."
	},
	{
		sloka: 'Sloka 418',
		ayat: "Orang-orang sengsara dan merana kerena ditinggal kekasihnya, sedangkan bagi mereka yang bijaksana tidak akan ada kesedihan yang melemahkan hati, sebab paham betul akan hukum ketidakkekalan."
	},
	{
		sloka: 'Sloka 419',
		ayat: "Usahakanlah segala sesuatu untuk tujuan kebajikan, hendaknya dipertimbangkan betul kemalasan diri, sebab inilah sumber dari kebodohan."
	},
	{
		sloka: 'Sloka 420',
		ayat: "Maka bagi mereka yang hendak memperoleh kebahagiaan sejati, istirahatlah pada jam istirahat, bekerjalah pada jam kerja, jangan melamun, jangan diperbudak birahi, jangan mabuk, jangan malas, jangan berbuat jahat, dan kendalikanlah nafsu-nafsu indrawi."
	},
	{
		sloka: 'Sloka 421',
		ayat: "Pengendalian pikiran harus terus diusahakan, jangan biarkan hawa nafsu bebas bergerak semaunya, sebab kejahatan pasti muncul dari liarnya nafsu yang akhirnya akan menenggelamkan orang pada duka nestapa."
	},
	{
		sloka: 'Sloka 422',
		ayat: "Orang yang diperbudak nafsu dan mereka yang selalu memenuhi kenikmatan indrawinya sungguh tidak akan pernah merasa puas walau segala upaya telah dilakukan untuk memanjakan nafsu indrawinya itu, bagaikan usaha ayam hutan yang hendak berteduh pada bayangan burung elang, kapankah ia akan terhindar dari panas terik."
	},
	{
		sloka: 'Sloka 423',
		ayat: "Birahi sesat itu jika dituruti tidak akan pernah terpuaskan, meskipun orang telah memberikan apa yang diidam-idamkannya; makin dituruti makin hebat keadaannya. Bagaikan api yang menyala karena minyak, semakin banyak dituangi semakin bertambah besar saja nyalanya."
	}];
  $scope.bab31 = [
	{
		sloka: 'Sloka 424',
		ayat: "Tidak ada yang menyamai kehebatan birahi sesat dalam membuat kesengsaraan, maka dari itu jauhi wanita jalang/lelaki hidung belang itu, jangan pernah diangan-angankan, sebaiknya ditinggalkan saja."
	},
	{
		sloka: 'Sloka 425',
		ayat: "Adapun mereka yang kehilangan akal, wanita jalang/lelaki hidung belang inilah salah satu penyebabnya; mereka menjual harta benda dan bahkan harga diri sekalipun demi wanita jalang/lelaki hidung; inilah awal dari segala kesengsaraan, oleh karena itu jangan sampai hati tertambat olehnya."
	},
	{
		sloka: 'Sloka 426',
		ayat: "Wanita jalang/lelaki hidung belang sesungguhnya lebih berbahaya dari badai, banjir bandang, api yang berkobar-kobar, ataupun bisa yang mematikan."
	},
	{
		sloka: 'Sloka 427',
		ayat: "Sebab wanita jalang/lelaki hidung belang senantiasa akan memancing nafsu birahi lalu mengikat si bodoh dalam tali temali asmaranya yang kuat."
	},
	{
		sloka: 'Sloka 428',
		ayat: "Tidak ada yang menjadi pantangan bagi wanita jalang/lelaki hidung belang, ia tidak membedakan apakah orang tua ataukah bocah, jika nafsu birahinya datang semua orang digoda dan diajak melakukan senggama."
	},
	{
		sloka: 'Sloka 429',
		ayat: "Umumnya wanita jalang/lelaki hidung belang itu berperilaku buruk, tidak dapat diatur walau telah dibatasi. Meskipun mereka berpendidikan agama, moral dan budi pekerti; jika ada kesempatan lupalah ia akan agama, moral pun budi pekerti."
	},
	{
		sloka: 'Sloka 430',
		ayat: "Bagaimanapun sulitnya ilmu pengetahuan ia dapat dipahami jika tekun mempelajarinya; namun sebaliknya, pikiran wanita jalang/lelaki hidung belang sangat sulit untuk diketahui dan tidak ada kepastian jika ia akan dapat dikuasai."
	},
	{
		sloka: 'Sloka 431',
		ayat: "Tidak ada puas-puasnya api itu, meskipun semua bahan bakar di bumi ini dituangkan padanya tidak akan membuat nyalanya mengecil, bahkan akan semakin besar dan berkobar-kobar saja keadaannya; demikian juga laut tiada pernah penuh meskipun dialiri oleh jutaan sungai-sungai besar; demikian juga sang maut tidak pernah berhenti mengambil jiwa-jiwa makhluk hidup. Demikianlah keadaan wanita jalang/lelaki hidung belang yang tiada pernah puas akan birahi dan persetubuhan."
	},
	{
		sloka: 'Sloka 432',
		ayat: "Tidak akan ada akhirnya, jika perbuatan-perbuatan tercela wanita jalang/lelaki hidung belang itu diceritakan. Bilamana ada orang yang berlidah seribu menceritakan kejelekannya dalam seratus tahun dan ia tidak mengerjakan pekerjaan lain selain bercerita, pasti tidak akan berakhir juga ceritanya itu."
	},
	{
		sloka: 'Sloka 433',
		ayat: "Wanita jalang/lelaki hidung belang itu adalah bara dari lawan jenisnya, apabila wanita/lelaki birahi datang padanya, pasti akan hancur lebur dan kehilangan dayanya; sebaliknya jika orang berlaku bijaksana dan hatinya tidak dkuasai oleh wanita jalang/lelaki hidung belang, niscaya ia akan selalu berkeadaan selamat."
	},
	{
		sloka: 'Sloka 434',
		ayat: "Sesungguhnya wanita jalang/lelaki hidung belang itu tidak ubahnya seperti sulap yang berbahaya, maka dari itu ia dijauhi oleh wanita/lelaki yang bijaksana, apalagi oleh orang yang telah bersuami istri."
	},
	{
		sloka: 'Sloka 435',
		ayat: "Kebiasaan wanita jalang dan lelaki hidung belang senantiasa menimbulkan kesengsaraan bagi yang lainnya, ia jugalah yang menjauhkan orang dari kewajiban dan rutinitas kerja; mereka yang bijaksana menyadari akan hal ini dan tidak akan tergoda oleh kenikmatan birahi sesat."
	},
	{
		sloka: 'Sloka 436',
		ayat: "Adalah kepunyaan paling pribadi dari lelaki hidung belang dan wanita jalang yang sesungguhnya sangat menjijikkan lagi pula sangat kotor dan berpenyakitan; mestinya benda itu dijauhi saja, beruntunglah orang jika tidak sampai lekat dan rindu birahi padanya."
	},
	{
		sloka: 'Sloka 437',
		ayat: "Sebab di dunia ini, sungguhpun orang cukup bijaksana, tiada luput ia dari nafsu birahi pada organ-organ seksual lawan jenisnya."
	},
	{
		sloka: 'Sloka 438',
		ayat: "Organ-organ seksual itu membuat banyak manusia bingung dan tergila-gila padanya, mereka seolah menjadi buta dan tuli karenanya."
	},
	{
		sloka: 'Sloka 439',
		ayat: "Tiada berdaya sesungguhnya orang jika selalu mengikuti nafsu birahinya yang sesat, semakin diikuti semakin bertambah kuat saja, tidak akan pernah menjadi puas ia akan persetubuhan."
	},
	{
		sloka: 'Sloka 440',
		ayat: "Terlalu menjijikkan organ-organ seks lelaki hidung belang dan wanita jalang itu jika dibicarakan, ia dipenuhi oleh bakteri-bakteri dan penyakit yang mematikan."
	},
	{
		sloka: 'Sloka 441',
		ayat: "Oleh karena itu hendaknya dijauhi saja lelaki hidung belang dan para wanita jalang, jangan didengarkan rayuannya, jangan dipandang wajahnya yang penuh birahi dan ajakan-ajakan sesat, jangan sampai tergoda padanya."
	},
	{
		sloka: 'Sloka 442',
		ayat: "Jangan tidak waspada akan datangnya nafsu birahi, jangan berfikir, jangan berbicara, jangan sampai melakukan birahi sesat."
	}];
  $scope.bab32 = [
	{
		sloka: 'Sloka 443',
		ayat: "Bagaikan api dalam rongga kayu, ia akan membakar kayu itu tanpa sisa, mati seluruhnya hingga ke akar, dahan, ranting dan daun-daunnya. Demikianlah nafsu birahi sesat itu dalam hati, ia pasti akan melenyapkan kebajikan, kekayaan, dan kebebasan. Nafsu birahi sesat itu senantiasa terkait dengan kebencian, selama nafsu birahi sesat itu ada dalam diri, kebencian pasti mendampinginya."
	},
	{
		sloka: 'Sloka 444',
		ayat: "Nafsu birahi sesat itu adalah belenggu utama umat manusia, jika ada orang yang mampu terbebas darinya, niscaya ia akan memperoleh alam sugawi, di mana tiada lagi kematian, kesengsaraan dan ketakutan."
	},
	{
		sloka: 'Sloka 445',
		ayat: "Mereka yang mampu mengendalikan birahinya, mampu mengendalikan amarahnya, tahan terhadap kecaman dan pujian, niscaya akan menjadi bijaksana."
	},
	{
		sloka: 'Sloka 446',
		ayat: "Orang janganlah terbakar oleh kemarahan, biarpun didera fitnah, ejekan, kata-kata kasar dan lain-lain; jangan pula melakukan fitnah, ejekan, dan berkata-kata kasar pada orang yang dianggap sesat sekalipun; sebab Tuhanlah yang maha tahu akan salah dan benar perbuatan manusia."
	},
	{
		sloka: 'Sloka 447',
		ayat: "Mereka yang dipengaruhi oleh pikiran sesat, kemudian akan berkeinginan sesat, berikutnya akan berusaha sesat, lalu mencintai kesesatan."
	}];
  $scope.bab33 = [
	{
		sloka: 'Sloka 448',
		ayat: "Yang disebut cinta buta itu, adalah sumber dari segala sumber bencana, yang menimbulkan kebencian dan ketakutan. Cinta buta diakui sebagai yang terjahat dari kejahatan, sungguh amat mengerikanlah akibat dari cinta buta itu."
	},
	{
		sloka: 'Sloka 449',
		ayat: "Mereka yang diperbudak cinta buta akan melakukan segalanya demi cintanya yang sesat, ia menjadi bodoh dan kehilangan kecerdasan, ia kehilangan jati diri dan sesungguhnyalah ia telah binasa dalam hidupnya."
	},
	{
		sloka: 'Sloka 450',
		ayat: "Masa kecil berganti dewasa, masa dewasa berganti masa tua; demikian juga kesehatan akan berganti kesakitan; pun juga hidup akhirnya akan mati. Sebaliknya cinta sesat itu tidak pernah mati walaupun badan mati; ia tetap melekat kuat pada roh jika anda belum menemukan cara untuk menglenyapkannya."
	},
	{
		sloka: 'Sloka 451',
		ayat: "Perhatikanlah orang tua itu, rambutnya telah rontok, badannya kurus kering dan bungkuk; demikian juga giginya telah tanggal semua, berjalan terhuyung-huyung karena kaki sudah tidak kuat lagi menyangga tubuhnya; akan tetapi keinginannya akan hidup yang berlimpah kekayaan sedikitpun tidak berkurang, sangat kukuh dan tidak tergoyahkan."
	},
	{
		sloka: 'Sloka 452',
		ayat: "Tidak ada apapun di dunia ini yang dapat memenuhi keinginan, sebab orang yang diperbudak keinginan tiada bedanya dengan usaha si bodoh yang hendak memenuhi samudera dengan air sumurnya."
	},
	{
		sloka: 'Sloka 453',
		ayat: "Jika kekayaan dan harta bertambah, bertambah jugalah keinginan itu, bagaikan keadaan tanduk lembu yang akan menjadi semakin besar dan panjang jika si lembu semakin dewasa dan semakin gemuk, demikianlah keinginan itu akan menjadi semakin bertambah hebat jika segala kemauannya dituruti."
	},
	{
		sloka: 'Sloka 454',
		ayat: "Tiada bedanya keinginan itu dengan keberadaan seorang wanita yang dapat menundukkan suaminya, dengan tega si istri menyuruh suaminya mengerjakan pekerjaan-pekerjaan yang tidak pantas untuk dilakukan; demikianlah kehebatan keinginan apabila selalu dituruti segala kehendaknya, niscaya ia akan memperbudak korbannya dan dibawalah mereka menuju kesesatan."
	},
	{
		sloka: 'Sloka 455',
		ayat: "Sesungguhnya sangat hebat pengaruh keinginan itu, timbulnya permusuhan, peperangan, dan berbagai kejahatan disebabkan olehnya; sebaliknya jika orang mampu menguasai keinginan maka tiada permusuhan dan dendam kesumat baginya, tiada kemiskinan pun kekayaan dan dapat terbebas dari duka nestapa."
	},
	{
		sloka: 'Sloka 456',
		ayat: "Bagaimanakah rupa dan wujud dari keinginan? Adalah sesuatu yang tidak berbadan namun sangat kuat melekat dalam badan, tidak mungkin tersingkirkan oleh orang-orang jahat; ia tidak turut musnah apabila badan sakit, merana dan sengsara, bahkan dapat tetap bertahan hidup walaupun badan telah mati. Jika keinginan itu dapat ditundukkan dan dikendalikan, kebahagiaan sejati pasti tercapai."
	},
	{
		sloka: 'Sloka 457',
		ayat: "Jika seluruh kesenangan di bumi dan kesenangan pahala surga disatukan, kemudian beratnya itu ditimbang dengan kebahagiaan sejati karena dapat terbebas dari keinginan, maka kesenangan bumi dan surga itu menjadi seringan kapas yang melayang tertiup angin."
	},
	{
		sloka: 'Sloka 458',
		ayat: "Keinginan itulah yang melahirkan keserakahan, tiada bedanya keserakahan itu dengan buaya, karena keduanya sama kejam menenggelamkan orang ke dalam kesengsaraan, jika keserakahan bertambah hebat timbullah kejahatan, adapun kejahatan itu mendatangkan penderitaan dan kesengsaraan."
	},
	{
		sloka: 'Sloka 459',
		ayat: "Singkatnya keinginan menimbulkan keserakahan, keserakahan merupakan rumah dari segala macam kejahatan, jika orang telah dikuasai oleh keserakahan ia pasti akan menjadi jahat, walau awalnya ia bijaksana dan suci sekalipun."
	},
	{
		sloka: 'Sloka 460',
		ayat: "Semakin besar keserakahan itu, semakin bertambah besar saja ketidakpuasan hati, jika orang tidak puas pastilah mengalami kesedihan dan kedukaan. Apabila keserakahan itu mengacaukan pikiran maka tiada gunalah kebijaksanaan dan segala ilmu pengetahuan yang dimiliki."
	},
	{
		sloka: 'Sloka 461',
		ayat: "Melalui keserakahan harta kekayaan didapatkan, setelah berhasil muncullah ketakutan akan adanya pencurian, perampokan dan lain-lain; apabila harta itu berkurang bukan main sedih hatinya, apabila menjadi bangkrut rasanya lebih buruk dari kematian; singkat kata keserakahan itu hanya menimbulkan kesedihan dan kedukaan hati saja."
	},
	{
		sloka: 'Sloka 462',
		ayat: "Setelah berhasil memperoleh harta hasil keserakahan, berikutnya muncullah kecongkakan, kebingungan dan kesusahan. Menjadi congkak karena harta diperoleh dengan mudah, bingung karena harta hasil kejahatan, dan susah karena takut harta akan segera habis."
	},
	{
		sloka: 'Sloka 463',
		ayat: "Mereka yang memperoleh harta dengan cara jahat, tiada orang yang tidak dicurigainya, bahkan ia juga curiga pada api yang bisa membakar hartanya, pada air yang bisa menghanyutkan hartanya, pada angin yang bisa menerbangkan hartanya; bagaikan keberadaan sang maut yang selalu ditakuti oleh makhluk hidup. Dalam kecurigaan dan ketakutan kapankah kebahagiaan itu diperoleh?"
	},
	{
		sloka: 'Sloka 464',
		ayat: "Tiada bedanya harta sesat itu dengan daging dendeng, semua tempat ditakutinya; jika ia ditaruh di atas burunglah yang ditakutinya, jika di bawah anjinglah yang ditakutinya, jika ditaruh di air ikanlah yang ditakutinya; semua tempat mendatangkan kecurigaan bagi orang yang memperoleh hartanya dengan cara sesat."
	},
	{
		sloka: 'Sloka 465',
		ayat: "Tiada yang abadi, persaudaraan, pernikahan, dan persahabatan yang terjalin semuanya kelak akan berpisah; bahkan lekatnya roh dengan badan sekalipun, kelak apabila tiba waktunya akan dipisahkan oleh maut. Menyadari itu semua apa sebabnya manusia menginginkan perolehan harta dengan cara yang sesat."
	},
	{
		sloka: 'Sloka 466',
		ayat: "Banyak orang yang berani mempertaruhkan nyawanya dan membunuh demi harta; ada orang yang mau menjual harga dirinya pun orang lain demi harta; bahkan banyak orang yang mau menjadi penjilat demi harta; demikian kuatnya keinginan akan perolehan harta, padahal ketika ia mati tidak akan ada sedikitpun yang bisa dibawanya ke alam akherat."
	},
	{
		sloka: 'Sloka 467',
		ayat: "Harta sesat adalah harta hasil keserakahan, keserakahan itu adalah sumber dari segala jenis kejahatan, kejahatan menghasilkan dosa, dari dosa diperolehlah neraka."
	},
	{
		sloka: 'Sloka 468',
		ayat: "Tiga yang dapat membuat manusia itu mabuk dan bingung, diantaranya: 1) lawan jenis (pria/wanita); 2) harta (kekayaan) dan 3) tahta (kekuasaan). Jika ada orang yang dikuasai olehnya, ia sesungguhnya sedang tidur atau pingsan dalam hidupnya."
	},
	{
		sloka: 'Sloka 469',
		ayat: "Hasrat akan kekayaan dan nafsu sesat pada lawan jenis berkeadaan sama dengan riaknya ombak, sama-sama goncang, berkeadaan tidak tetap, dan tidak bisa diprediksi; karena sifatnya yang berubah-ubah hendaknya orang bijaksana tidak lekat padanya, sebab kenikmatan yang diberikan oleh harta dan nafsu sesat itu sama persis dengan kenikmatan jika berlindung dibawah mulut ular yang berbisa."
	},
	{
		sloka: 'Sloka 470',
		ayat: "Janganlah menjadi bingung, jangan berlebih-lebihan dalam mengejar harta, hendaknya dilakukan secara wajar dan benar, sebab hasrat badaniah dan panca indra itu adalah rintangan terberat dari umat manusia."
	},
	{
		sloka: 'Sloka 471',
		ayat: "Kemiskinan dan kekayaan itu terlihat berbeda, seolah-olah si miskin adalah wujud kesengsaraan dan si kaya adalah wujud kebahagiaan; padahal jika dicermati, orang kaya yang tidak pernah merasa puas akan selalu saja diganggu oleh perasaan takut bangkrut sedangkan si miskin yang puas dengan hidupnya berhasil memperoleh kebahagiaan."
	},
	{
		sloka: 'Sloka 472',
		ayat: "Orang-orang yang suka mengejar perolehan harta secara sesat, tidak ada satupun dari mereka yang dapat terbebas dari kesusahan juga tidak ada satupun dari mereka yang akan memperoleh kebahagiaan sejati; maka dari itu orang bijak tidak akan mengumpulkan harta dengan cara sesat, bahkan pikiran-pikiran tentang kesesatan itu dengan cepat hendaknya dienyahkan dari dalam diri."
	},
	{
		sloka: 'Sloka 473',
		ayat: "Suka dan duka sejatinya disebabkan oleh pikiran sendiri; orang menjadi suka hatinya melihat suatu yang menyenangkan, sebaliknya orang dapat mengalami duka nestapa ketika melihat sesuatu yang tidak menyenangkan; seseorang menjadi senang ketika dapat memungut sekeping emas sebaliknya yang kehilangan menjadi berduka; orang berduka karena kecurian sedangkan si pencuri bergembira mendapat harta curian. Inilah yang menjadi alasan bahwa sesungguhnya suka dan duka itu di sebabkan oleh subjektifitas pikiran."
	},
	{
		sloka: 'Sloka 474',
		ayat: "Sangat sukar memperoleh harta kekayaan; sangat berat tanggung jawab untuk mensejahterakan keluarga, namun sebaliknya sangat mudah untuk memperoleh kesengsaraan, mereka yang dapat memahami ketiganya berdasarkan kewajiban pasti dapat terbebas dari belenggu kesengsaraan."
	},
	{
		sloka: 'Sloka 475',
		ayat: "Maka dari itu hendaknya segala sesuatu yang terkait dengan keduniawian dilakukan atas dasar kewajiban dan jangan sampai terikat olehnya, bagaikan keadaan sang ular yang melepaskan kulitnya dengan ikhlas demi perkembangan dirinya menuju kebaikan."
	},
	{
		sloka: 'Sloka 476',
		ayat: "Mereka yang terikat kuat oleh perasaan cinta buta, sesungguhnya sangat gemar hidup dalam kesedihan dan duka hati; bagaikan menusuk jantung sendiri dengan tombak."
	},
	{
		sloka: 'Sloka 477',
		ayat: "Karena cinta buta itulah asal mula dari kesedihan hati, perasaan yang buta itu membuat hidup terkekang dan terbelenggu duka hati."
	},
	{
		sloka: 'Sloka 478',
		ayat: "Jika sangat lekat cinta buta itu pada keluarga, hingga segala cara hendak dilakukan demi kemewahan keluarga, keadaan orang ini sama dengan seekor gajah tua yang dengan sengaja menenggelamkan diri dan keluarganya dalam lumpur."
	},
	{
		sloka: 'Sloka 479',
		ayat: "Mereka yang mencintai anak dan istrinya secara buta hingga tanpa sadar melakukan tindakan-tindakan yang justru menyesatkan keluarganya berkeadaan layaknya orang yang tanpa sadar minum minuman keras hingga mabuk, mereka menjadi bingung, kacau pikirannya dan membahayakan orang lain."
	},
	{
		sloka: 'Sloka 480',
		ayat: "Keluarga, istri, bahkan anak dengan sengaja harus dinasehati, dimarahi bahkan dihukum jika mereka melakukan tindakan-tindakan jahat; keluarga, istri, bahkan anak hendaknya dengan rela ditinggalkan ketika ajal tiba."
	},
	{
		sloka: 'Sloka 481',
		ayat: "Apapun yang berlebih-lebihan hendaknya ditinggalkan saja, karena tidak mungkin akan membawa pada kebaikan; demikian juga cinta yang berlebih-lebihan hanya akan membawa orang pada kesengsaraan saja."
	},
	{
		sloka: 'Sloka 482',
		ayat: "Jangan memikirkan lagi ikatan-ikatan duniawi, harta, keluarga anak dan istri ketika ajal menjemput, bebaskan diri dari ikatan-ikatan duniawi agar dapat mencapai kebebasan."
	},
	{
		sloka: 'Sloka 483',
		ayat: "Sesungguhnya segala kesenangan dan duka dalam hidup ini terkait erat dengan kehidupan terdahulu."
	},
	{
		sloka: 'Sloka 484',
		ayat: "Sesungguhnya orang terpisah kemudian bertemu kemudian berpisah lalu bertemu lagi pada akhirnya akan terpisah juga oleh kematian, walaupun kelak dapat bertemu lagi dalam kehidupannya yang akan datang."
	},
	{
		sloka: 'Sloka 485',
		ayat: "Demikianlah persahabatan terjalin, pernikahan terjadi, anak dilahirkan pada akhirnya semua akan dipisahkan oleh sang maut kematian, oleh karena itu janganlah terlalu bersedih apalagi sampai menyengsarakan diri apabila perpisahan itu terjadi."
	}];
  $scope.bab34 = [
	{
		sloka: 'Sloka 486',
		ayat: "Tiada yang tahu akan penjelmaan manusia, tidak juga dapat diketahui berapa banyak penjelmaan yang telah dilalui, berkali-kali pernah menjadi ayah, ibu, suami, istri, dan anak; menyadari siklus ini siapakah yang sebenarnya dengan permanen dapat dikatakan seketurunan, dan yang manakah dapat anda tunjuk satu keturunan permanen dengan anda?"
	},
	{
		sloka: 'Sloka 487',
		ayat: "Tidak ada hubungan yang kekal, bahkan hubungan anda dengan badan pun tidak kekal, suatu saat dan pasti akan tiba saatnya anda berpisah dengan badan sendiri."
	},
	{
		sloka: 'Sloka 488',
		ayat: "Dinyatakan hidup datang dari ketiadaan dan akan kembali tiada, menyadari ini yang manakah sesungguhnya menjadi hak milik secara permanen, sedangkan cepat atau lambat akan tiba saatnya di mana anda akan berpisah dengan sesuatu yang dianggap kepunyaan sendiri."
	},
	{
		sloka: 'Sloka 489',
		ayat: "Akan tiba saatnya kita berpisah dengan kekayaan, akan tiba saatnya kita berpisah dengan orang tua, akan tiba saatnya kita berpisah dengan anak-anak, dengan sahabat, teman dan lain-lain; ketika perpisahan itu terjadi hanyalah baik buruk perbuatan diri yang setia menemani."
	},
	{
		sloka: 'Sloka 490',
		ayat: "Adalah mereka yang selalu bersedih akan yang mati, adalah mereka yang selalu bersedih akan harta yang hilang; sangat besarlah kesedihan hatinya, kesedihan itulah sumber dari kesengsaraan."
	},
	{
		sloka: 'Sloka 491',
		ayat: "Inilah obat untuk memusnahkan kesedihan, jangan pernah membiarkan diri larut dalam kesedihan yang berkepanjangan akibat kehilangan dan kematian, jangan pernah menenggelamkan diri dalam kedukaan hati, sadarilah bahwa pada akhirnya tiada apapun yang kekal, manusia akhirnya akan berpisah dengan orang-orang yang disayang, akhirnya mereka akan kehilangan harta kekayaan; orang yang senantiasa sadar dan ikhlas pada yang hidup pasti akan mati, yang datang pasti akan hilang, dapat terbebas dari kedukaan dan kesedihan hati."
	},
	{
		sloka: 'Sloka 492',
		ayat: "Ada kalanya orang meninggalkan kekayaannya, seringkali kekayaan meninggalkan orang, tiada kekallah pertalian orang dengan hartanya dan harta dengan orangnya, inilah bukti bahwa segala sesuatu itu tidak akan pernah kekal; orang yang bijaksana dan sadar akan hakekat ini, pasti dapat terbebas dari ikatan."
	},
	{
		sloka: 'Sloka 493',
		ayat: "Sebaiknya kuatkanlah diri dengan ilmu pengetahuan yang benar, yang dapat membimbing orang untuk senantiasa berkeadaan sadar pada hukum ketidakkekalan dan dapat terbebas dari ikatan."
	},
	{
		sloka: 'Sloka 494',
		ayat: "Mereka yang sadar akan ketidakkekalan, walaupun layu bunga yang disuntingkan di rambut kepalanya tidak akan membuatnya berduka atau bersedih, sedangkan mereka yang buta, amat bersedih hatinya jika sesuatu yang diyakininya sebagai kepunyaan menjadi berkurang walaupun hanya beberapa bagian kecil saja."
	},
	{
		sloka: 'Sloka 495',
		ayat: "Perhatikan orang yang bahkan hingga mempertaruhkan jiwanya demi menumpuk harta kekayaan, orang seperti ini sungguh kurang bijaksana sebab mereka yang bijaksana hanya mau bersusah-susah asalkan dengan tidak susah juga ia dihilangkan. Orang yang kurang bijak karena mendapatkan harta dengan sangat susah menjadi terikat kuat dengan hartanya itu, sedangkan mereka yang bijak meskipun tampaknya harta didapat dengan cara susah tidaklah terikat beliau olehnya."
	},
	{
		sloka: 'Sloka 496',
		ayat: "Ada suka pasti ada duka; ada yang kaya pasti ada yang miskin; ada yang hidup pasti ada yang mati. Sekarang suka suatu saat pasti mengalami duka, sekarang kaya suatu saat pasti menjadi miskin, sekarang hidup suatu saat pasti akan mati, demikianlah keadaannya datang dan pergi, hidup dan mati silih berganti; mereka yang bijaksana tidak bergembira pada yang datang dan tidak pula beliau bersedih pada yang pergi, senantiasa tenang dan jernih pikirannya."
	},
	{
		sloka: 'Sloka 497',
		ayat: "Nikmatilah kesukaan dan kesedihan, jalani hidup dalam kaya dan miskin, ikhlaslah pada yang hidup dan yang mati. Janganlah pikirkan hasil dan kontribusi yang didapatkan dari usaha, akan tetapi teruslah berbuat bajik dan benar, bagaikan orang bersawah tahan akan panas terik matahari dan tetap bekerja berdasarkan kewajiban, setelah saatnya tiba panen pasti akan diperoleh."
	},
	{
		sloka: 'Sloka 498',
		ayat: "Sesungguhnya tidak dapat dihindari suka dan duka itu, sebab keduanya adalah anugerah bagi pendewasaan diri; namun mereka yang bijak tidak akan dapat dikacaukan oleh keduanya dan justru mendapatkan manfaat darinya."
	},
	{
		sloka: 'Sloka 499',
		ayat: "Hidup ini bagaikan putaran roda, yang tadinya di atas berikutnya akan berada di bawah, demikian juga yang di bawah berikutnya akan berada di atas, demikian juga suka dan duka itu datang silih berganti, ada kalanya suka berikutnya duka, adakalanya duka berikutnya suka; sesungguhnya semua itu terhubung dengan hukum sebab akibat dari perbuatan sendiri; baik ataukah buruk kualitas hidup saat ini, sungguh disebabkan oleh perbuatan masa lalu."
	},
	{
		sloka: 'Sloka 500',
		ayat: "Jika orang sadar akan hakekat dari hukum sebab akibat perbuatan, demikian juga sadar akan hakekat kelahiran dan kematian (hukum karma), semakin ia sadar akan hakekatnya semakin tidak terlekati dirinya oleh kesenangan dan kesedihan, orang seperti inilah yang disebut bijaksana."
	},
	{
		sloka: 'Sloka 501',
		ayat: "Pikiran yang dipenuhi oleh pengetahuan sejati (hakekat karma), inilah hendaknya dipergunakan untuk melenyapkan kedukaan hati; seperti rempah-rempah dapat dipakai melenyapkan penyakit badan, demikianlah kearifan budi dapat dipakai menyembuhkan penyakit-penyakit rohani."
	},
	{
		sloka: 'Sloka 502',
		ayat: "Penyakit rohani pada akhirnya pasti akan menimbulkan penyakit fisik; seperti besi yang dibakar hingga panas lalu dicemplungkan ke dalam air, panas jugalah air itu akhirnya."
	},
	{
		sloka: 'Sloka 503',
		ayat: "Oleh sebab itu kekacauan pikiranlah yang hendaknya dimusnahkan lebih dulu dengan kearifan budi, bagaikan keberadaan api yang akan padam oleh air, demikian juga apabila kekacauan pikiran lenyap, hilang jugalah sakitnya badan."
	},
	{
		sloka: 'Sloka 504',
		ayat: "Bukannya orang yang telah berusia lanjut, bukannya orang yang sudah ubanan, dan bukannya orang yang keriput kulitnya dikatakan bijaksana, melainkan hanya orang yang paham akan hekekat paling hakiki dari pengetahuan itu sajalah yang pantas dinyatakan bijaksana."
	},
	{
		sloka: 'Sloka 505',
		ayat: "Mereka yang arif bijaksana tidak bersedih jika mengalami kesusahan, tidak bergirang hati jika memperoleh kesenangan, tidak digelapkan hatinya oleh kemarahan, ketakutan dan kedukaan hati; mereka yang bijak tetap tenang dan jernih hatinya dalam berbagai situasi."
	},
	{
		sloka: 'Sloka 506',
		ayat: "Beribu-ribu kesusahan, demikian juga ribuan marabahaya dan kedukaan hati datang dalam hidup ini, hanya pikiran si bodohlah yang dapat dikacaukan oleh keadaan itu, sedangkan mereka yang arif bijaksana sedikitpun tidak terkacaukan."
	},
	{
		sloka: 'Sloka 507',
		ayat: "Mereka yang telah berhasil memahami hakekat paling hakiki dari pengetahuan pasti dapat melenyapkan segala pikiran kotor, dapat melenyapkan perkataan kotor, dan dapat melenyapkan perbuatan kotor. Mereka yang berkeadaan suci terbebas dari sifat ego dan malas, rohani pun jasmaninya dipenuhi oleh sifat baik dan bajik."
	},
	{
		sloka: 'Sloka 508',
		ayat: "Mereka yang arif bijaksana tidak akan dibutakan hatinya oleh kenikmatan duniawi; walaupun dikelilingi oleh berbagai kesenangan, oleh berbagai kelezatan makanan, mereka yang arif bijaksana tidak akan terlekati olehnya. Adapun mereka yang bodoh menjadi sangat senang saat memperoleh kenikmatan hidup pun amat berduka ketika memperoleh kesengsaraan hidup, hati mereka buta oleh kebodohannya."
	},
	{
		sloka: 'Sloka 509',
		ayat: "Kearifan budi jika dikotori oleh kekotoran pikiran berkeadaan tidak murni lagi, seperti kemurnian emas menjadi berkurang karena adanya logam campuran, menyebabkan cahaya emas menjadi kurang cemerlang."
	},
	{
		sloka: 'Sloka 510',
		ayat: "Jika tekun dalam melatih dan menyucikan pikiran niscaya kecemaran badanpun akan lenyap, jika kekotoran badan dapat dilenyapkan oleh pengetahuan hakiki, terhapuslah segala macam kesengsaraan hidup."
	},
	{
		sloka: 'Sloka 511',
		ayat: "Demikian hebatnya kekuatan pikiran itu, ia tidak tampak namun kenyataannya ia ada dan menjadi sumber dari segalanya, ia sumber dari kebahagiaan pun sumber dari kesengsaraan, berkeadaan layaknya jejak-jejak burung yang terbang diudara atau jejak ikan yang berenang di air."
	}];
	
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><ng-md-icon icon="{{item.icon}}"></ng-md-icon><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
  
}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Setting', icon: 'settings' },
    { name: 'Share', icon: 'share' },
    { name: 'Komentar', icon: 'comment' }
    /*{ name: 'Copy', icon: 'list' },
    { name: 'Print this page', icon: 'print' }*/
  ];
  
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

app.directive('userAvatar', function() {
  return {
    replace: true,
    template: '<svg class="user-avatar" viewBox="0 0 128 128" height="64" width="64" pointer-events="none" display="block" > <path fill="#FF8A80" d="M0 0h128v128H0z"/> <path fill="#FFE0B2" d="M36.3 94.8c6.4 7.3 16.2 12.1 27.3 12.4 10.7-.3 20.3-4.7 26.7-11.6l.2.1c-17-13.3-12.9-23.4-8.5-28.6 1.3-1.2 2.8-2.5 4.4-3.9l13.1-11c1.5-1.2 2.6-3 2.9-5.1.6-4.4-2.5-8.4-6.9-9.1-1.5-.2-3 0-4.3.6-.3-1.3-.4-2.7-1.6-3.5-1.4-.9-2.8-1.7-4.2-2.5-7.1-3.9-14.9-6.6-23-7.9-5.4-.9-11-1.2-16.1.7-3.3 1.2-6.1 3.2-8.7 5.6-1.3 1.2-2.5 2.4-3.7 3.7l-1.8 1.9c-.3.3-.5.6-.8.8-.1.1-.2 0-.4.2.1.2.1.5.1.6-1-.3-2.1-.4-3.2-.2-4.4.6-7.5 4.7-6.9 9.1.3 2.1 1.3 3.8 2.8 5.1l11 9.3c1.8 1.5 3.3 3.8 4.6 5.7 1.5 2.3 2.8 4.9 3.5 7.6 1.7 6.8-.8 13.4-5.4 18.4-.5.6-1.1 1-1.4 1.7-.2.6-.4 1.3-.6 2-.4 1.5-.5 3.1-.3 4.6.4 3.1 1.8 6.1 4.1 8.2 3.3 3 8 4 12.4 4.5 5.2.6 10.5.7 15.7.2 4.5-.4 9.1-1.2 13-3.4 5.6-3.1 9.6-8.9 10.5-15.2M76.4 46c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6zm-25.7 0c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9 0-1.6-.7-1.6-1.6-.1-.9.7-1.6 1.6-1.6z"/> <path fill="#E0F7FA" d="M105.3 106.1c-.9-1.3-1.3-1.9-1.3-1.9l-.2-.3c-.6-.9-1.2-1.7-1.9-2.4-3.2-3.5-7.3-5.4-11.4-5.7 0 0 .1 0 .1.1l-.2-.1c-6.4 6.9-16 11.3-26.7 11.6-11.2-.3-21.1-5.1-27.5-12.6-.1.2-.2.4-.2.5-3.1.9-6 2.7-8.4 5.4l-.2.2s-.5.6-1.5 1.7c-.9 1.1-2.2 2.6-3.7 4.5-3.1 3.9-7.2 9.5-11.7 16.6-.9 1.4-1.7 2.8-2.6 4.3h109.6c-3.4-7.1-6.5-12.8-8.9-16.9-1.5-2.2-2.6-3.8-3.3-5z"/> <circle fill="#444" cx="76.3" cy="47.5" r="2"/> <circle fill="#444" cx="50.7" cy="47.6" r="2"/> <path fill="#444" d="M48.1 27.4c4.5 5.9 15.5 12.1 42.4 8.4-2.2-6.9-6.8-12.6-12.6-16.4C95.1 20.9 92 10 92 10c-1.4 5.5-11.1 4.4-11.1 4.4H62.1c-1.7-.1-3.4 0-5.2.3-12.8 1.8-22.6 11.1-25.7 22.9 10.6-1.9 15.3-7.6 16.9-10.2z"/> </svg>'
  };
});

app.config(function($mdThemingProvider) {
  var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});