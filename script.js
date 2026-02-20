let active = false

const container = document.getElementById('wrap-container')
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(600, 400)
container.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xfffffff)

const camera = new THREE.PerspectiveCamera(15, 1920 / 1080, 0.1, 1000)
camera.position.set(0, 2, 13)
camera.lookAt(0, 0, 0)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(3, 5, -1)
scene.add(light)
scene.add(new THREE.AmbientLight(0xffffff, 0.5))

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material1 = new THREE.MeshPhongMaterial({ color: 0x00ff00 })
const material2 = new THREE.MeshPhongMaterial({ color: 0x00ff00 })

const cube1 = new THREE.Mesh(geometry, material1)
const cube2 = new THREE.Mesh(geometry, material2)

cube1.position.x = -2
cube2.position.x = 2


scene.add(cube1)
scene.add(cube2)

let targetX1 = -2
let targetX2 = 2

document.getElementById('button').addEventListener('click', function (e) {
    e.preventDefault()
    active = !active

    if (active) {
        targetX1 = -0.7
        targetX2 = 0.7
        material1.color.set(0xff0000);
        material2.color.set(0xff0000);
        document.getElementById('circle').setAttribute('fill', '#A30000');
    } else {
        targetX1 = -2
        targetX2 = 2
        material1.color.set(0x00ff00)
        material2.color.set(0x00ff00)
        document.getElementById('circle').setAttribute('fill', 'green')
    }
})

function animate() {
    requestAnimationFrame(animate)
    cube1.position.x += (targetX1 - cube1.position.x) * 0.05;
    cube2.position.x += (targetX2 - cube2.position.x) * 0.05;
    renderer.render(scene, camera)
}
animate()