import { Scene } from 'phaser'

export default class PreloadScene extends Scene {
  _drpSurfix = '@2x'

  constructor() {
    super({ key: 'Preload' })
  }

  preload() {
    let _drpSurfix = this._drpSurfix
    
    // 设置加载图片基础路径
    this.load.setPath('./assets/images')
    // 背景
    this.load.image('background', `background${_drpSurfix}.png`)
    // 加载甜品
    this.load.multiatlas({
      key: 'desserts',
      // atlasURL ?? 
      url: `desserts${_drpSurfix}.json`,
      path: 'assets/images'
    })

    // 加载 星星消除 精灵
    // this.load.multiatlas('destroy_light', 'destroy_light.json', 'assets/images')
    this.load.multiatlas('explosion', 'explosion.json', 'assets/images')

    // 设置加载声音基础路径
    this.load.setPath('./assets/sounds')
    this.load.audio('swapSound','chomp.wav')
    this.load.audio('invalidSwapSound', 'error.wav')
    this.load.audio('matchSound', 'ka-ching.wav')
    this.load.audio('fallingCookieSound', 'scrape.wav')
    this.load.audio('addCookieSound', 'drip.wav')
    this.load.audio('bgMusic', 'mining-by-moonlight.mp3')
  }

  create() {
    // 创建星星消除动画
    // this.anims.create({
    //   key: 'destroy',
    //   // 其实prefix可以不用
    //   frames: this.anims.generateFrameNames('destroy_light', { prefix: 'destroy_light_', start: 0, end: 5, zeroPad: 2, suffix: '.png' }),
    //   frameRate: 20
    // })

    // 创建甜品消除动画pink
    this.anims.create({
      key: 'explosionpink',
      frames: this.anims.generateFrameNames('explosion', { prefix: 'explosionpink_', start: 0, end: 4, zeroPad: 2, suffix: '.png' }),
      frameRate: 20
    })
    
    // 创建甜品消除动画red
    this.anims.create({
      key: 'explosionred',
      frames: this.anims.generateFrameNames('explosion', { prefix: 'explosionred_', start: 0, end: 4, zeroPad: 2, suffix: '.png' }),
      frameRate: 20
    })

    this.scene.start('Game')
  }
}