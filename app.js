const text = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue rhoncus iaculis dignissim finibus congue. Ante taciti aliquet amet tristique eleifend quisque tellus a habitant aliquam tortor tellus. Mattis gravida lacus convallis rutrum risus leo eros vivamus amet class per maximus dictumst nullam cras.`,

  `Neque risus mollis tristique aenean nam laoreet adipiscing placerat pellentesque facilisis senectus nec urna et tortor. Orci senectus nostra vehicula finibus risus ornare ipsum interdum mi eleifend cursus hac gravida.`,

  `Iaculis quisque feugiat gravida nostra accumsan congue nibh curae. Tincidunt ornare blandit odio elementum euismod. Placerat eget pulvinar nibh primis risus lacinia magna taciti felis tincidunt venenatis tincidunt commodo fringilla. Sit placerat nisi etiam curae id sapien.`,

  `Lorem nostra molestie malesuada amet ullamcorper porta dignissim augue potenti dui urna. Consectetur habitant diam curabitur eu vulputate ac. Et pellentesque donec blandit sed sapien at pretium ultrices nisl vestibulum leo pulvinar urna erat. Tortor mattis orci potenti augue lorem accumsan mi.`,

  `Commodo lacinia taciti tellus nam praesent scelerisque consectetur metus maecenas hac. Suspendisse consectetur blandit leo nam integer lectus.`,

  `Et non eleifend magna aptent pellentesque class sollicitudin orci eleifend laoreet phasellus himenaeos tristique ligula nullam. Maximus suscipit curae metus fermentum metus eget lectus mattis nunc maximus pretium nec pellentesque. Porta etiam luctus risus curabitur sapien luctus habitant adipiscing eleifend vitae convallis fringilla habitasse.`,

  `Integer potenti et in rhoncus per auctor elementum nisl varius aptent commodo etiam ex. Sociosqu facilisis donec hac praesent porta nec faucibus sociosqu fringilla auctor erat habitasse iaculis at pretium. Ornare mollis euismod platea justo dui luctus mollis risus gravida vel. Tempor sed odio sem vivamus imperdiet integer lacus faucibus ullamcorper aenean mattis hac primis. Ipsum nec at pellentesque in mauris sit.`,

  `Metus finibus dui lobortis euismod netus ullamcorper sem potenti laoreet diam. Aliquam lobortis dictum velit integer lacinia augue viverra quam ultrices elit mi nullam adipiscing euismod curabitur. Cras id eu habitasse ac adipiscing augue potenti. Elit fringilla tempus lacus rutrum iaculis.`,

  `Luctus suspendisse metus habitant pulvinar curae. Blandit volutpat faucibus ullamcorper magna ex himenaeos enim litora.`,

  `Curabitur vestibulum interdum est elementum lectus praesent. Litora litora posuere turpis sagittis curabitur a nisi et ullamcorper orci in cubilia. Dui arcu duis ad praesent fusce vehicula erat luctus turpis maximus blandit et nulla tellus convallis. Hac volutpat dapibus odio per risus duis.`,

  `Erat ante ultricies iaculis fermentum dui conubia tincidunt dolor finibus tempus. Semper potenti tortor dolor vulputate donec nisl suspendisse ante arcu ultricies sollicitudin mi orci habitasse urna. Sapien fermentum ultricies volutpat amet auctor dictumst ex augue. Bibendum dapibus mattis consectetur ullamcorper augue sit himenaeos. Turpis sollicitudin non dictum purus sociosqu erat et eu purus consequat vivamus integer.`,

  `Lectus platea adipiscing nostra semper est sit pharetra vivamus eget taciti blandit sollicitudin dolor mauris. Himenaeos orci ultricies per rhoncus posuere.`,

  `Leo cras mollis pellentesque curae tincidunt arcu tristique. Pellentesque sagittis lacinia enim dictum ultricies etiam gravida suspendisse posuere euismod nisl tincidunt convallis eros elit. Consectetur curabitur quis porta lorem platea egestas faucibus vel faucibus habitasse faucibus nunc neque. Tristique inceptos purus sed accumsan eleifend in posuere nibh feugiat blandit sociosqu volutpat ipsum. Curabitur bibendum ultricies vivamus turpis suspendisse sodales fringilla semper volutpat dapibus augue ultrices dapibus mollis.`,

  `Porttitor ad rhoncus dui condimentum maximus. Erat dictum dolor duis iaculis tortor pretium.`,

  `Tellus vestibulum congue inceptos habitasse fusce vivamus volutpat adipiscing consequat maecenas euismod auctor nunc platea. Convallis sed pulvinar vestibulum sociosqu nisi eget tempor ligula justo rhoncus interdum ultrices euismod dolor consequat.`,

  `Maximus ac ullamcorper sociosqu curabitur nisi proin hac aptent pulvinar. Sollicitudin habitasse dignissim aenean malesuada erat lacinia suspendisse. Ut platea augue fames orci enim potenti volutpat at litora euismod risus. Tortor cubilia netus semper laoreet suscipit curabitur nisl bibendum habitant massa dignissim inceptos dictum tincidunt.`,

  `Dapibus id proin elit orci sed nam platea. Platea nullam lectus feugiat purus etiam eros. Commodo elit netus consequat a elementum nam sollicitudin.`,

  `Maximus commodo convallis nibh nec auctor vehicula enim pharetra faucibus senectus sapien. Litora eleifend mi ornare rutrum potenti purus faucibus. In est aenean congue morbi himenaeos urna vitae ligula rutrum donec convallis nunc vulputate nec. Interdum lacus purus potenti diam laoreet neque nibh sodales justo dui tristique.`,

  `Orci finibus nisi dui libero placerat mattis amet velit tortor sollicitudin vulputate tempus vel lacinia. Dictumst et ex dui suscipit ex. Platea eu vivamus commodo adipiscing blandit malesuada laoreet faucibus eros fermentum imperdiet vivamus vitae finibus fringilla.`,

  `Quis pharetra senectus nibh quisque himenaeos tempor lacinia. Amet taciti bibendum pellentesque consequat himenaeos. Habitant lobortis mollis elementum eleifend phasellus primis imperdiet maecenas a viverra dignissim duis. Imperdiet eleifend porta curae lacinia vestibulum ex praesent eget sollicitudin lectus tortor varius pulvinar sapien. Platea rutrum sociosqu purus mollis magna interdum at pellentesque at imperdiet nulla euismod lacinia ac.`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  if (isNaN(value) || value <= 0 || value > 20) {
    result.innerHTML = `<p class="ms-5 me-5 px-4 py-2">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="ms-5 me-5 px-4 py-2">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});
