---
title: Code Hacks I saw karpathy use
publishDate: 23 Jun 2024
description: 
---
- import code, code.interact(local=locals())
- sys.exit(0)
- use_fused = 'fused' in inspect.signature(torch.optim.AdamW).parameters
