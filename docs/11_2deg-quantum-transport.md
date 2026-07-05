# 第11回 2次元電子系と量子輸送

## この回の内容

- 2次元電子系の電子状態
- ランダウ準位、シュブニコフ・ド・ハース振動
- 量子ホール効果（整数・分数）、エッジ状態、トポロジカル不変量
- 量子スピンホール効果、メゾスコピック系
- ランダウアー公式、量子ポイントコンタクト、アハラノフ・ボーム効果、ランダウアー・ビュティカー公式、S行列

---

## 1. 2次元電子系の電子状態

幅 $L$ の無限障壁井戸に閉じ込められた電子のエネルギーは、$z$ 方向の量子化でサブバンドを作り、$xy$ 面内は自由電子的：

$$\varepsilon = \varepsilon_n + \frac{\hbar^2}{2m}(k_x^2+k_y^2),\qquad
\varepsilon_n = \frac{\hbar^2}{2m}\left(\frac{n\pi}{L}\right)^2.$$

2次元の状態密度は**エネルギーに依存せず一定**で、サブバンドごとに階段状に加わる：

$$D(\varepsilon) = \frac{m}{\pi\hbar^2}\sum_n\theta(\varepsilon-\varepsilon_n).$$

---

## 2. ランダウ準位

### 古典的描像

磁場中の電子はローレンツ力で円運動する。$m^*\ddot{\mathbf r}=-e\mathbf v\times\mathbf B$ の解は

$$\mathbf r = \mathbf R + r_0(\cos\omega_c t,\ \sin\omega_c t),$$

$\mathbf R=(X,Y)$ は**ガイド中心**。電場があるとガイド中心は電場と垂直方向に等速ドリフトする。

### 量子的取り扱い

有効質量近似のハミルトニアンをベクトルポテンシャル $\mathbf A$ で書く。**動的運動量** $\boldsymbol\pi=\mathbf p+e\mathbf A$（実空間速度 $\mathbf v=\boldsymbol\pi/m^*$ に対応）を導入すると

$$\mathcal H = \frac{(\mathbf p+e\mathbf A)^2}{2m^*} = \frac{\boldsymbol\pi^2}{2m^*},\qquad
\boldsymbol\pi\times\boldsymbol\pi = -i\hbar e\mathbf B.$$

$\mathbf B=(0,0,B)$ のとき交換関係は

$$[\pi_x,\pi_y] = -i\frac{\hbar^2}{l^2},\qquad
\boxed{\,l = \sqrt{\frac{\hbar}{eB}}\,(\text{磁気長})\,}.$$

$l$ は基底状態のサイクロトロン半径で、磁束量子 $\Phi_0=h/e$ が貫く円の半径の $1/\sqrt2$。$\pi_x,\pi_y$ が交換しないため、これらから昇降演算子を作れる：

$$a = \frac{l}{\sqrt2\,\hbar}(\pi_x - i\pi_y),\qquad a^\dagger = \frac{l}{\sqrt2\,\hbar}(\pi_x + i\pi_y),\qquad [a,a^\dagger]=1,$$

$$\mathcal H = \hbar\omega_c\left(a^\dagger a + \frac12\right).$$

### ランダウ準位とその縮退

エネルギー固有値は調和振動子型に離散化する（**ランダウ量子化**）：

$$\boxed{\,\varepsilon_N = \hbar\omega_c\left(N+\frac12\right)\ (N=0,1,2,\dots),\qquad
\omega_c = \frac{eB}{m^*}\,(\text{サイクロトロン周波数})\,}$$

ランダウゲージ $\mathbf A=(0,B x,0)$ をとると、$\psi=e^{ik_y y}F(x)$ は $x=X=-l^2 k_y$ を中心とする1次元調和振動子になる。ガイド中心 $(X,Y)$ はハミルトニアンに現れないのでエネルギーは $X,Y$ によらず、大きな**縮退**が生じる。単位面積あたりの縮退度は

$$\frac{1}{2\pi l^2} = \frac{eB}{h} = \frac{B}{\Phi_0}.$$

磁場中の連続状態が、間隔 $\hbar\omega_c$・縮退度 $eB/h$ の離散準位へと分裂する。

---

## 3. フィリングファクター

何本のランダウ準位が占有されているかを表す**充填率**：

$$\boxed{\,\nu = \frac{n_e}{B/\Phi_0} = \frac{n_e h}{eB} = \frac{N_e}{N_\Phi}\,}$$

$N_\Phi=B/\Phi_0$ は磁束量子の数。$\nu^{-1}$ は電子1個あたりの磁束量子数。$B\to\infty$ で全電子が最低ランダウ準位に入り、磁場を下げると縮退度が下がって順に上の準位が占有される。

---

## 4. シュブニコフ・ド・ハース（SdH）振動

電子散乱でランダウ準位は有限の幅（$\sim h/\tau$）を持つ。2次元状態密度は

$$D(\varepsilon) = 2n_e\sum_{N=0}^\infty \mathcal L\!\left(\varepsilon-\hbar\omega_c\Bigl(N+\tfrac12\Bigr)\right),$$

$\mathcal L$ は広がりを表す偶関数（例：ローレンツ型、$\tau_q$：量子寿命）。フェルミ準位がランダウ準位を横切るたびに状態密度が振動し、伝導度 $\sigma_{xx}$ が磁場に対して**周期的に振動**する（SdH 振動）。周期は

$$\Delta\!\left(\frac1B\right) = \frac{2\pi e}{\hbar S_F},$$

$S_F$ はフェルミ面の面積。応用：

- $1/B$ に対する周期から**電子濃度**が求まる。
- 振動振幅の温度依存性から**有効質量**が求まる。
- 磁場の角度依存性からフェルミ面の情報が得られる。

---

## 5. 整数量子ホール効果（IQHE）

（von Klitzing 1980、1985 年ノーベル賞）。強磁場・低温の2次元電子系で、ホール抵抗が量子化される。

$$\boxed{\,\rho_{xy} = \frac{h}{\nu e^2} = \frac{25813}{\nu}\ \Omega,\qquad \rho_{xx} = 0\,}$$

$R_K=h/e^2\approx25813\ \Omega$ を**クリッツィング定数**という。ホール伝導度が6桁以上の精度で量子化され、**電気抵抗の国際標準**に使われる。

### 半古典論での強磁場極限

$\omega_c\tau\gg1$ で

$$\sigma_{xx} = \frac{ne^2\tau}{m^*}\frac{1}{1+(\omega_c\tau)^2}\to0,\qquad
\sigma_{xy} = \frac{ne^2\tau}{m^*}\frac{\omega_c\tau}{1+(\omega_c\tau)^2}\to\frac{ne}{B}.$$

$\nu$ 番目のランダウ準位まで占有すると $n=\nu eB/h$ なので $\sigma_{xy}=\nu e^2/h$。ただし半古典論は「$\nu$ が整数値で量子化値をとる」ことを示すだけで、有限幅の**プラトー**は説明できない。プラトーの説明には「乱れによる局在」が要る。

### 局在領域

ランダウ準位の上端・下端（移動度端の外側）では、電子はポテンシャルの山谷の等高線に沿って運動する**局在状態**（一種のアンダーソン局在）で伝導に寄与しない。準位中央付近の**非局在状態**だけが伝導を担う。フェルミ準位が局在領域にある間は $\sigma_{xy}$ が変わらず、プラトーが生じる。

---

## 6. エッジ状態

試料中央では円運動が完結するが、試料端では円運動が完結できず、端に沿って**スキッピング運動**する（エッジ電流）。ランダウゲージで端のポテンシャル $V(x)$ を加えると、準位は $X$ の関数になり、群速度

$$v_y = \frac{1}{\hbar}\frac{d\varepsilon}{dk} = -\frac{l^2}{\hbar}\frac{d\varepsilon}{dX}$$

は試料中央でゼロ、端に近づくと非ゼロになる（端で準位が持ち上がる）。各エッジ状態が運ぶ電流を積分すると、1ランダウ準位あたり

$$J = \frac{e}{h}(\mu-\varepsilon_0).$$

試料の両端 A, B の化学ポテンシャル差（ホール電圧）を用いると、ホール伝導度は

$$\sigma_{xy} = \frac{J_y}{V_x} = \frac{e^2}{h}\times(\text{占有ランダウ準位数}) = \nu\frac{e^2}{h}.$$

エッジ状態は後方散乱を受けにくく（反対向きの状態が試料の反対端にある）、これが $\rho_{xx}=0$ と正確な量子化の起源。

### トポロジカル不変量による説明

フェルミ準位がランダウギャップ内にあるとき、系の励起には有限エネルギーが必要。線形応答（久保公式）でホール伝導度は

$$\sigma_{xy} = C\frac{e^2}{h},\qquad
C = \int\frac{d^2k}{2\pi}\bigl[\nabla_k\times\mathbf A(\mathbf k)\bigr]_z,\quad
\mathbf A(\mathbf k) = -i\langle u_{\mathbf k}|\nabla_k|u_{\mathbf k}\rangle.$$

$\mathbf A$ は**ベリー接続**、被積分関数は**ベリー曲率**。$C$ は**チャーン数**（TKNN 数）とよばれる整数のトポロジカル不変量で、ギャップが有限なら摂動で変化しない。これがプラトーの頑健性と量子化精度を保証する。

---

## 7. 分数量子ホール効果（FQHE）

（Tsui, Störmer, Gossard 1982／1998 年ノーベル賞）。より高移動度の試料では、$\nu=p/q$（$q$：奇数）の**分数**でもプラトーが現れる。

$$\sigma_{xy} = \nu\frac{e^2}{h},\qquad \nu = \frac{p}{q}.$$

$\nu=1/q$ は**ラフリン状態**：電子間相互作用が支配的な量子液体で、ギャップが生じ $\sigma_{xx}=0$、$e/q$ の**分数電荷**を持つ準粒子が励起される。ラフリンの波動関数は

$$\psi_q(z_1,\dots,z_N) = \prod_{i>j}(z_i-z_j)^q\,\exp\!\left(-\sum_i\frac{|z_i|^2}{4}\right),\qquad z=(x-iy)/l.$$

$e^*=e/3$ の分数電荷はショットノイズ測定で実証された。$\nu$ が分数のホール状態は**複合フェルミオン**（電子に偶数本の磁束量子が付いた準粒子）で統一的に理解できる。

### 量子スピンホール効果（トポロジカル絶縁体）

磁場なしでも、強いスピン軌道相互作用 $H_{SOI}=\lambda_{SOI}\boldsymbol\sigma\cdot(\mathbf p\times\mathbf E)$ によって、スピンごとに逆向きに流れるヘリカルなエッジ状態が生じる（HgTe 量子井戸で観測）。

---

## 8. メゾスコピック系

巨視的（マクロ）と微視的（ミクロ）の中間スケール。電子の**位相**が関与する干渉効果（波動性）や、散乱をほとんど受けない**弾道的伝導**（粒子性）が現れる。特徴的な長さ：

| 長さ | 定義 | 目安 |
|------|------|------|
| フェルミ波長 $\lambda_F=2\pi/k_F$ | | 金属 ~1 Å、半導体 ~100 nm |
| 平均自由行程 $l=v_F\tau$ | 弾性散乱間の距離 | 半導体 >1 μm |
| 熱拡散長 $L_T=\sqrt{D\hbar/k_BT}$ | | |
| 位相コヒーレンス長 $L_\phi=\sqrt{D\tau_\phi}$ | 非弾性散乱で位相が乱れるまで | |

- $L\gg l$：拡散伝導（散乱を繰り返す）。
- $L\le l$：弾道的（バリスティック）伝導。
- $L\le L_\phi,\,L_T$：干渉効果が現れる。

---

## 9. ランダウアー公式

散乱のない単一チャネル1次元導体を、化学ポテンシャル $\mu_L,\mu_R$ の電子溜につなぐ。波数 $k$ の状態の電流 $j(k)=\frac{e}{\hbar L}\frac{d\varepsilon}{dk}$ を占有状態で積分すると、全電流は

$$J = \int j(k)\,\frac{L\,dk}{2\pi} = \frac{e}{h}(\mu_L-\mu_R) = \frac{e^2}{h}V,$$

したがって1チャネルの伝導度は

$$\boxed{\,G = \frac{e^2}{h} \equiv G_q\ (\text{量子化伝導度}),\qquad R_q=\frac{h}{e^2}\approx25.8\ \mathrm{k\Omega}\,}$$

散乱のない完全導体なのに抵抗が有限なのは、電子溜と導線の界面で緩和が起こるため（熱はチャネルではなく界面で発生する）。反射（透過率 $T\le1$）と複数チャネルを考えると

$$G = \frac{2e^2}{h}\sum_{ij}T_{ij}\quad(\text{2 はスピン自由度}).$$

---

## 10. 量子ポイントコンタクト（QPC）

2次元電子に、$x$ 方向に幅 $W(x)$ が変化する閉じ込めポテンシャルを与えると、サブバンドごとに実効1次元ポテンシャル $V_{\text{eff}}(x)$ を受ける。

$$\varepsilon_k(x) = \varepsilon_k + \frac{\hbar^2}{2m^*}\left(\frac{n\pi}{W(x)}\right)^2.$$

$V_{\text{eff}}$ の最高点がフェルミエネルギーを超えるサブバンドは伝導に寄与しない。ゲート負電圧を強めると $W$ が縮んで伝導チャネル数が離散的に減り、**伝導度が $2e^2/h$ を1段とする階段状**に量子化される。鞍点付近は調和ポテンシャル $V_{\text{eff}}=V_0+\frac12 m^*\omega_x^2 x^2-\frac12 m^*\omega_y^2 y^2$ が良い近似。走査ゲート法でコヒーレントな電子流を可視化できる。

---

## 11. アハラノフ・ボーム（AB）効果

経路上に磁場がなくても、ベクトルポテンシャルが荷電粒子波の干渉に影響する。経路 $C$ が囲む面積を貫く磁束を $\Phi=\oint_C\mathbf A\cdot d\mathbf s$ とすると、2経路の位相差は

$$\Delta\theta = \frac{e}{\hbar}\oint_C\mathbf A\cdot d\mathbf s = 2\pi\frac{\Phi}{\Phi_0}.$$

電子波は磁束に対して**周期 $\Phi_0=h/e$** で干渉する。固体素子（金リング）では伝導度が周期 $\Phi_0$ で振動する。位相コヒーレンスを失う長さ（位相緩和長 $L_\phi$）や熱拡散長 $L_T$ が振動を抑える。関連：普遍的コンダクタンス揺らぎ（UCF）、周期 $\Phi_0/2$ の AAS 効果。AB リングは電子波の位相計測（共鳴準位の $\pi$ シフト、近藤状態の $\pi/2$ シフト）や which-path 検出によるデコヒーレンス実験に応用される。

---

## 12. ランダウアー・ビュティカー公式

多端子系へ拡張する。端子 $p$（化学ポテンシャル $\mu_p=eV_p$）から試料に流れ込む電流は

$$J_p = \frac{2e}{h}\sum_q\bigl(T_{q\leftarrow p}\mu_p - T_{p\leftarrow q}\mu_q\bigr)
= \sum_q\bigl(G_{qp}V_p - G_{pq}V_q\bigr),\qquad G_{pq}=\frac{2e^2}{h}T_{p\leftarrow q}.$$

制約：電流保存 $\sum_p J_p=0$、全端子同電位で電流ゼロより $\sum_q(G_{qp}-G_{pq})=0$。磁場下では**オンサガーの相反定理**

$$\boxed{\,G_{qp}(B) = G_{pq}(-B)\,}$$

が成り立つ（端子を入れ替えた磁気抵抗は磁場反転に対して対称）。4端子測定に拡張すると、電流端子と電圧端子を入れ替えた磁気抵抗が磁場反転に対して対称になる（$\mathcal R_{13,24}(B)=\mathcal R_{24,13}(-B)$）。

### 散乱行列（S行列）

量子回路の多重反射・干渉は散乱行列で扱う。入力 $\mathbf a$・出力 $\mathbf b$ を $\mathbf b=S\mathbf a$ で結ぶと、確率流保存より $S$ は**ユニタリー**（$S^\dagger S=I$）。時間反転対称が破れる磁場下では $S(B)={}^tS(-B)$（オンサガー相反と同値）。透過率は $T_{m\leftarrow n}=|S_{mn}|^2$、端子間は $T_{p\leftarrow q}=\sum_{m\in p}\sum_{n\in q}T_{m\leftarrow n}$。

---

## キーポイント

- ランダウ準位 $\varepsilon_N=\hbar\omega_c(N+\tfrac12)$、縮退度 $eB/h=B/\Phi_0$、磁気長 $l=\sqrt{\hbar/eB}$。
- 充填率 $\nu=n_e h/eB$。SdH 振動の $1/B$ 周期から電子濃度、振幅温度依存から有効質量。
- IQHE：$\rho_{xy}=h/\nu e^2$、$\rho_{xx}=0$、$R_K=h/e^2=25813\ \Omega$。プラトーは局在＋エッジ状態＋チャーン数（トポロジー）で理解。
- FQHE：電子相関、ラフリン状態、分数電荷 $e/q$、複合フェルミオン。
- ランダウアー：1チャネル $G=e^2/h$（スピン込み $2e^2/h$）。QPC は $2e^2/h$ 階段。
- AB 効果は周期 $\Phi_0=h/e$。多端子はランダウアー・ビュティカー＋オンサガー相反 $G_{qp}(B)=G_{pq}(-B)$。
