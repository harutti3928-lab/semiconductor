# 第10回 電子の伝導と散乱

## この回の内容

- ドルーデ理論
- 電子散乱（散乱確率、ボルツマン方程式）
- キャリア散乱過程（イオン化不純物散乱、フォノン散乱など）
- 半導体の移動度・ドリフト速度
- （補足）HEMT の二次元電子系とサブバンド計算

---

## 1. ドルーデ理論

最も古典的・単純な電子輸送理論。電子は独立に運動し、速度に比例する摩擦力（散乱、平均衝突間隔 $\tau$）を受けるとする。運動方程式は

$$m^*\frac{dv}{dt} + \frac{m^*}{\tau}v = -eE.$$

$t=0$ で電場を切ると $m^*v = m^*v_{t=0}\exp(-t/\tau)$ となり、電場で得た運動量が $\tau$ 後に $e^{-1}$ に減衰する。$\tau$ を**緩和時間**（フォノンや不純物との平均衝突時間）という。

定常状態（$dv/dt=0$）では

$$v = -\frac{e\tau}{m^*}E = -\mu E,\qquad
\boxed{\,\mu = \frac{e\tau}{m^*}\,(\text{移動度})\,}.$$

移動度は単位電場あたりの電子の平均（ドリフト）速度で、電子の動きやすさの目安。電流密度は

$$J = n(-e)v = \frac{ne^2\tau}{m^*}E = ne\mu E = \sigma E,\qquad
\boxed{\,\sigma = \frac{ne^2\tau}{m^*} = ne\mu\,}.$$

> **例（銅のドリフト速度）**：断面 1 mm² に 10 A（$J=10^7\ \mathrm{A/m^2}$）、$n\sim10^{29}\ \mathrm{m^{-3}}$ で $v=J/ne\sim0.6\ \mathrm{mm/s}$。一方フェルミ速度 $v_F\sim1.6\times10^6\ \mathrm{m/s}$。ドリフト速度はフェルミ速度に比べ桁違いに小さい。$\tau\sim3.6\times10^{-14}\ \mathrm s$。

ドルーデ理論では $\tau$ はパラメータ。以下、微視的過程から $\tau$ を決める。

---

## 2. 電子散乱と散乱確率

完全な周期構造ではブロッホ関数が固有状態だが、乱れがあると状態間遷移が起こる。状態 $k\to k'$ の単位時間あたりの遷移確率はフェルミの黄金律で

$$S(k,k') = \frac{2\pi}{\hbar}\bigl|\langle f|H_{\text{int}}|i\rangle\bigr|^2\,\delta(E_f-E_i)\quad(\text{弾性散乱})$$

（非弾性なら $\delta(E_f-E_i\mp E_p)$）。等方的・弾性散乱が支配的な場合、緩和時間は**散乱角の重み $(1-\cos\theta)$** をつけて

$$\boxed{\,\frac{1}{\tau(k)} = W(k) = \int S(k,k')\,(1-\cos\theta_{k,k'})\,dk'\,}$$

$(1-\cos\theta)$ は「前方散乱（$\theta\simeq0$）は運動量をあまり変えず伝導を妨げない」ことを表す重み。

---

## 3. ボルツマン方程式

位相空間 $(\mathbf r,\mathbf k)$ での分布関数 $f(\mathbf k,\mathbf r;t)$ の時間発展を、ドリフト・拡散・衝突の3項で表す。

$$\frac{\partial f}{\partial t} = \left.\frac{\partial f}{\partial t}\right|_{\text{drift}} + \left.\frac{\partial f}{\partial t}\right|_{\text{diff}} + \left.\frac{\partial f}{\partial t}\right|_{\text{coll}}.$$

- ドリフト項：外力 $\mathbf F$ で $\dot{\mathbf k}=\mathbf F/\hbar$。
- 拡散項：速度 $\mathbf v=\frac1\hbar\nabla_k\varepsilon$ で位置が変化。
- 衝突項：**緩和時間近似** $\left.\partial f/\partial t\right|_{\text{coll}} = -(f-f_0)/\tau$。

まとめると、$f$ に対するボルツマン方程式は

$$\frac{\partial f}{\partial t} + \hbar^{-1}\mathbf F\cdot\nabla_k f + \mathbf v\cdot\nabla_r f = -\frac{f-f_0}{\tau}.$$

定常（$\partial f/\partial t=0$）・空間一様（$\nabla_r f=0$）では

$$f(k) - f_0(k) = -\tau\,\hbar^{-1}\mathbf F\cdot\nabla_k f \simeq -\tau\,\hbar^{-1}\mathbf F\cdot\nabla_k f_0.$$

$x$ 方向電場 $E$（$\mathbf F=-eE\hat x$）で線形化すると

$$f_1(k) = e\tau v_x E\left(-\frac{\partial f_0}{\partial\varepsilon}\right).$$

電流 $J_x=\int f_1(k)(-e)v_x\,dk$ を非縮退（ボルツマン分布、$-\partial f_0/\partial\varepsilon=f_0/k_BT$）で評価すると、ドルーデと同じ

$$J_x = \frac{ne^2\tau}{m^*}E = ne\mu E$$

が得られる（$\tau$ はエネルギー平均を含む）。

---

## 4. キャリア散乱過程

| 分類 | 具体例 |
|------|--------|
| 不純物散乱 | イオン化不純物散乱、中性不純物散乱 |
| フォノン散乱 | 音響フォノン、非有極性光学フォノン、有極性光学フォノン |
| キャリア–キャリア散乱 | プラズモン散乱、2体散乱 |
| その他 | 合金散乱、転位・格子欠陥・粒界散乱、界面ラフネス散乱 |

複数の機構が働くときは、独立とみなして**マティーセンの規則** $1/\tau=\sum_i 1/\tau_i$（$1/\mu=\sum_i 1/\mu_i$）で合成する。

---

## 5. イオン化不純物散乱

イオン化ドナー/アクセプタ（点電荷）による弾性散乱。点電荷は周囲の電子で遮蔽され、**遮蔽クーロンポテンシャル**（湯川型）になる。

$$V(r) = \frac{Ze}{4\pi\varepsilon_0\varepsilon_r r}e^{-q_D r},\qquad
q_D = \sqrt{\frac{e^2 n_0}{\varepsilon_0 k_BT}}\ (\text{デバイ遮蔽の逆長}).$$

摂動 $H'=\frac{Ze^2}{4\pi\varepsilon_0\varepsilon_r r}e^{-q_D r}$ に対し、1個の不純物による散乱確率は

$$S(k,k') = \frac{2\pi}{\hbar}\frac{(4\pi)^2 A^2}{((k'-k)^2+q_D^2)^2}\delta(E_{k'}-E_k).$$

これを緩和時間の式に代入すると散乱レートは $\propto N_I/E_k^{3/2}$ となり、

$$\boxed{\,\mu_{\text{ion}} \propto T^{3/2}\,}$$

**特徴**：

- 高密度ドープ領域で顕著（散乱体が多い＋低抵抗で高電場がかからずキャリアが高エネルギーを得にくい）。
- 散乱レートが $E^{-3/2}$：速い電子ほど散乱されにくい（散乱断面積 $\propto E^{-2}$ × 状態密度 $\propto E^{1/2}$）。
- 温度上昇でキャリアが速くなるため散乱されにくくなり、移動度は $T^{3/2}$ で増加。

---

## 6. 音響フォノン散乱

音響フォノンは隣接原子が同方向に変位する波で、結晶に緩やかな歪み（局所的な膨張・収縮）を作る。これがエネルギーバンドを変化させ（**変形ポテンシャル** $F_d$）、電子の位置エネルギーを変えて散乱を起こす。摂動は

$$H' = F_d\,\nabla\cdot\mathbf u(\mathbf r,t),$$

フォノン数はボーズ分布 $n_q=1/(\exp(\hbar\omega_q/k_BT)-1)$。散乱レートは（格子温度 $T_L$、弾性定数 $c_L$）

$$W(k) = \frac{2\pi F_d^2 k_B T_L}{\hbar c_L}N(E_k),\qquad N(E_k)=\frac{(2m^*)^{3/2}}{4\pi^2\hbar^3}\sqrt{E_k},$$

したがって

$$\boxed{\,\mu_{\text{ac}} \propto T^{-3/2}\,}$$

内訳：$T^{-1}$ はフォノン数の温度依存、$T^{-1/2}$ は散乱レートが $\sqrt{E}$（状態密度）に比例することによる。

---

## 7. 移動度の温度依存性

低温では**イオン化不純物散乱**（$\mu\propto T^{3/2}$、右上がり）、高温では**音響フォノン散乱**（$\mu\propto T^{-3/2}$、右下がり）が支配し、移動度は中間温度でピークを持つ。

| 散乱機構 | 移動度の温度依存 |
|----------|------------------|
| イオン化不純物 | $T^{3/2}$ |
| 音響フォノン | $T^{-3/2}$ |
| ピエゾ効果 | $T^{-1/2}$ |
| 中性不純物 | $T^{0}$ |
| 極性光学フォノン | $\propto T^{1/2}[\exp(\hbar\omega_{OP}/k_BT)-1]$ |

- **n-Ge**：低ドープほどピーク移動度が高く、低温側で $T^{3/2}$、高温側で $T^{-3/2}$。
- Si（室温）：電子移動度は正孔の約3倍。低密度では音響フォノン散乱、$10^{15}$–$10^{16}\ \mathrm{cm^{-3}}$ 以上でイオン化不純物散乱が効く。

### ドリフト速度の飽和

ドリフト速度が電場に比例する（オーム的）のは低電場（$\mathcal E\lesssim2\times10^3\ \mathrm{V/cm}$）のみ。高電場では光学フォノン放出などにより $v_d\sim10^7\ \mathrm{cm/s}$ 付近で**飽和**する。

---

## 8. （補足）HEMT の二次元電子系とサブバンド計算

変調ドープ単一ヘテロ構造（HEMT）では、イオン化ドナーの空間電荷が作る静電ポテンシャルで界面に**三角ポテンシャル**ができ、電子が閉じ込められて 2DEG になる。イオン化不純物と空間的に分離されるので高移動度。界面を $z=0$ とするポテンシャルは

$$V(z) = V_0\theta(-z) + \frac{4\pi e^2}{\kappa_s}N_{\text{depl}}z + v_H(z).$$

サブバンドの求め方には3つのレベルがある。

**A. 三角ポテンシャル近似**：$z>0$ を一定電場 $\mathcal F$ で置き換え、$z=0$ に無限障壁を仮定。解はエアリー関数で、

$$\varepsilon_n \approx \left(\frac{\hbar^2}{2m}\right)^{1/3}\left(\frac{3\pi e\mathcal F}{2}\left(n+\frac34\right)\right)^{2/3}.$$

**B. 変分法**：MOS 反転層で使われる **Fang–Howard 試行関数**

$$\zeta_0(z) = \sqrt{\frac{b^3}{2}}\,z\,e^{-bz/2}\quad(z>0)$$

でエネルギーを最小化。1電子あたり全エネルギーを最小にする $b$ が解析的に求まる。

**C. 自己無撞着法**：包絡関数のシュレーディンガー方程式とポアソン方程式を自己無撞着に解く。

$$-\frac{\hbar^2}{2m^*}\frac{d^2\zeta_n}{dz^2} + [\varepsilon_n - e\phi(z)]\zeta_n = 0,\qquad
\frac{d^2\phi}{dz^2} = -\frac{1}{\kappa_s}\Bigl(N_{\text{depl}} - e\sum_n N_n|\zeta_n|^2\Bigr),$$

各サブバンドの面密度は $N_n = \frac{m^* k_BT}{\pi\hbar^2}\ln[1+\exp((\varepsilon_F-\varepsilon_n)/k_BT)]$。Fang–Howard 解を初期値にポテンシャルを更新し、$\varepsilon_n$ が収束するまで反復する。→ 第11回の 2 次元電子系につながる。

---

## キーポイント

- ドルーデ：$\mu=e\tau/m^*$、$\sigma=ne^2\tau/m^*=ne\mu$。
- 緩和時間 $1/\tau=\int S(k,k')(1-\cos\theta)dk'$、$(1-\cos\theta)$ は前方散乱を割り引く重み。
- ボルツマン方程式（緩和時間近似）を線形化するとドルーデが再現される。
- イオン化不純物散乱 $\mu\propto T^{3/2}$（低温支配）、音響フォノン散乱 $\mu\propto T^{-3/2}$（高温支配）→ 移動度は中間でピーク。
- 高電場で $v_d\sim10^7\ \mathrm{cm/s}$ に飽和。
- HEMT 2DEG は三角ポテンシャル（エアリー／Fang–Howard／自己無撞着）でサブバンドを求める。
