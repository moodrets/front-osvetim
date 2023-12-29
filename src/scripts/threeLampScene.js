export class ThreeLampScene {
    #scene = null
    #camera = null
    #renderer = null
    #object = null
    #renderElem = null
    #texturePath = null
    #filePath = null
    #controls = null
    orbitControlEnabled = false

    constructor({texturePath, filePath, renderElem, orbitControlEnabled}) {
        if (orbitControlEnabled) {
            this.orbitControlEnabled = orbitControlEnabled
        }
        this.#texturePath = texturePath
        this.#filePath = filePath
        this.#renderElem = renderElem
        this.#init()
    }

    animate() {
        this.#renderer.render(this.#scene, this.#camera);
        requestAnimationFrame(this.animate.bind(this));
    }

    #init() {
        this.#scene = new THREE.Scene()
        this.#camera = new THREE.PerspectiveCamera(10.2, this.#renderElem.offsetWidth/this.#renderElem.offsetHeight, 1, 5000)
        this.#camera.position.z = 1000

        let light1 = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5)
        light1.position.set(0, 1, 0)
        this.#scene.add(light1)

        let light2 = new THREE.DirectionalLight(0xffffff, 1.5)
        light2.position.set(0, 1, 0)
        this.#scene.add(light2)

        let light3 = new THREE.DirectionalLight(0xffffff, 0.8)
        light3.position.set(0, -3, 0)
        this.#scene.add(light3)

        this.#renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        })

        this.#renderer.setSize(this.#renderElem.offsetWidth, this.#renderElem.offsetHeight)
        this.#renderElem.appendChild(this.#renderer.domElement)

        if (this.orbitControlEnabled) {
            this.#controls = new THREE.OrbitControls(this.#camera,  this.#renderer.domElement);
            this.#controls.enableZoom = false;
            this.#controls.enablePan = false;
        }

        const fbxLoader = new THREE.FBXLoader()

        fbxLoader.setResourcePath(this.#texturePath)

        fbxLoader.load(this.#filePath, (obj) => {
            this.#object = obj
            this.#scene.add(this.#object)
            this.#object.rotation.z += -.4
            this.#object.rotation.x += -.5
            this.animate()
        })

        this.#renderElem.addEventListener('wheel', (event) => {
            event.preventDefault()
            const axis = new THREE.Vector3(0, 1, 0).normalize();
            const speed = event.deltaY * 0.001;
            this.#object.rotateOnAxis(axis, speed)
        })
    }
}