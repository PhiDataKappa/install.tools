

<script>/*<![CDATA[*/var oldieCheck=Boolean(document.getElementsByTagName('html')[0].className.match(/\soldie\s/g));if(!oldieCheck){document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"><\/script>');}else{document.write('<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"><\/script>');}/*]]>*/</script>
<script>/*<![CDATA[*/if(!window.jQuery){if(!oldieCheck){document.write('<script src="js/libs/jquery-2.0.2.min.js"><\/script>');}else{document.write('<script src="js/libs/jquery-1.10.1.min.js"><\/script>');}}/*]]>*/</script>
<script src="js/libs/gumby.min.js"></script>
<script src="js/plugins/waypoints.min.js"></script>
<script src="js/plugins/placeholders.js"></script>
<script src="js/theme.js"></script>
<script>
  $.get('https://api.github.com/repos/theodi/comma-chameleon/releases', function(data) {
    assets = data[0].assets
    $('#win32').attr('href', assets[3].browser_download_url)
    $('#win64').attr('href', assets[4].browser_download_url)
    $('#osx').attr('href', assets[0].browser_download_url)
    $('#linux32').attr('href', assets[1].browser_download_url)
    $('#linux64').attr('href', assets[2].browser_download_url)
  })
</script>

<script>
var odi_path = [
  /* move to start */
  'M 193 64',

  /* 'O' */
  'c -5 -12.4 -12.4 -23.8 -22.2 -33.6',
  'c -18.9 -18.9 -43.9 -29.3 -70.6 -29.3',
  'c -26.7 0 -51.8 10.4 -70.6 29.3',
  'c -18.9 18.9 -29.2 43.9 -29.2 70.6',
  'c 0 26.7 10.4 51.8 29.2 70.6',
  'c 18.9 18.9 43.9 29.3 70.6 29.3',
  'c 26.7 0 51.8 -10.4 70.6 -29.3',
  'c 9.7 -9.7 17.2 -21.1 22.2 -33.6',

  /* bottom of 'D' */
  'v 61.3',
  'h 84.8',
  'c 14.7 0 28.4 -2.4 40.9 -7',
  'c 12.3 -4.6 23.1 -11.3 32 -19.9',
  'c 10 -9.6 17.4 -21.2 22.2 -34.3',

  /* 'I' */
  'v 61',
  'h 93.5',
  'v -197',
  'h -93.5',
  'v 61.1',

  /* top of 'D' */
  'c -4.8 -13.2 -12.2 -24.7 -22.2 -34.3',
  'c -9 -8.6 -19.8 -15.3 -32 -19.9',
  'c -12.5 -4.6 -26.2 -7 -40.9 -7',
  'h -84.8',
  'v 61.4'
]


var logo = SVG('odi-logo')

logo.width('45%')
logo.height('100%')
logo.id('odi-logo')

logo.viewbox({
  x: 0,
  y: 0,
  width: 467,
  height: 202
})

var badge = logo.path(odi_path.join(' ')).fill('#fff')

logo.viewbox({
  x: 0,
  y: 0,
  width: 830,
  height: 200
})

var text = logo.text(function(add) {
  add.tspan('open').newLine()
  add.tspan('data').newLine()
  add.tspan('institute').newLine()
})


//text.fill('#fa8100')

text.move(482, -10)
text.font({
  family: 'Helvetica Neue',
  size: 90,
  anchor: 'left',
  weight: 'bold',
  leading: 0.8,
  fill: '#fff'
})

var group = logo.group()
group.add(badge)
group.add(text)

group.linkTo(function(link) {
  link.to('//theodi.org')
})
</script>
